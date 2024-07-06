import { Heading } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres.ts";
import usePlatforms from "../hooks/usePlatforms.ts";
import useGameQueryStore from "../store.ts";

const GameHeading = () => {
  const {data: genres} = useGenres()
  const selectedGenreId = useGameQueryStore(s => s.gameQuery.genreId)
  const genre = genres.results.find((g) => g.id === selectedGenreId);
  
  const {data: platforms} = usePlatforms()
  const selectedPlatformId = useGameQueryStore(s => s.gameQuery.platformId)
  const platform= platforms.results.find((p) => p.id === selectedPlatformId);
  
  const heading = `${platform?.name || ""} ${
    genre?.name || ""
  } Games`;
  return (
    <Heading as="h1" marginY={5} fontSize="5xl">
      {heading}
    </Heading>
  );
};

export default GameHeading;
