import { GameQuery } from "../App.tsx";
import { useQuery } from "@tanstack/react-query";
import games from "../data/games.ts";
import {Platform} from "./usePlatforms.ts";
import APIClient from "../services/api-client.ts";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

const apiClient = new APIClient<Game>("/games")

const useGames = (gameQuery: GameQuery) =>
  useQuery({
    queryKey: ["games", gameQuery],
    queryFn: () => apiClient.getAll({
      params: {
        genres: gameQuery.genre?.id,
        parent_platforms: gameQuery.platform?.id,
        ordering: gameQuery.sortOrder,
        search: gameQuery.searchText,
      },
    }),
    staleTime: 24 * 60 * 60 * 1000, // 24h
    initialData: { count: games.length, results: games },
  });

export default useGames;
