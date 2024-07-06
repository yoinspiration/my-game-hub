import {useInfiniteQuery} from "@tanstack/react-query";
import {Platform} from "./usePlatforms.ts";
import APIClient, {FetchResponse} from "../services/api-client.ts";
import ms from 'ms'
import useGameQueryStore from "../store.ts";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

const apiClient = new APIClient<Game>("/games")

const useGames = () => {
  const gameQuery = useGameQueryStore(s => s.gameQuery)
  
  return useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: ({pageParam}) => apiClient.getAll({
      params: {
        genres: gameQuery.genreId,
        parent_platforms: gameQuery.platformId,
        ordering: gameQuery.sortOrder,
        search: gameQuery.searchText,
        page: pageParam
      },
    }),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined
    },
    staleTime: ms('24h')
  });
}

export default useGames;
