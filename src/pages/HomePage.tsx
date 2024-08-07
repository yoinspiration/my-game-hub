import {Grid, GridItem, HStack, Show} from "@chakra-ui/react";
import GenreList from "../components/GenreList.tsx";
import GameHeading from "../components/GameHeading.tsx";
import PlatformSelector from "../components/PlatformSelector.tsx";
import SortSelector from "../components/SortSelector.tsx";
import GameGrid from "../components/GameGrid.tsx";

const HomePage = () => {
  return (
    <Grid
      templateAreas={{
        base: `"main"`,
        lg:   `"aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg:   "200px 1fr",
      }}
    >
      <Show above="lg">
        <GridItem area="aside">
          <GenreList />
        </GridItem>
      </Show>
      <GridItem area="main">
          <GameHeading />
          <HStack spacing={4} marginBottom={5}>
            <PlatformSelector />
            <SortSelector />
          </HStack>
        <GameGrid />
      </GridItem>
    </Grid>
  );
};

export default HomePage;
