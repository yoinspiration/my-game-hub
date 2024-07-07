import {useParams} from "react-router-dom";
import useGame from "../hooks/useGame.ts";
import {Spinner, Text, Heading, SimpleGrid, GridItem} from "@chakra-ui/react";
import ExpandableText from "../components/ExpandableText.tsx";
import GameAttributes from "../components/GameAttributes.tsx";
import GameTrailer from "../components/GameTrailer.tsx";
import GameScreenshots from "../components/GameScreenshots.tsx";

const GameDetailPage = () => {
  const {slug} = useParams()
  const {data: game, isLoading, error} = useGame(slug!)
  
  if (isLoading) return <Spinner />
  
  if (error || !game) return <Text>{error?.message}</Text>;
  
  return <>
    <SimpleGrid columns={{
      base: 1, md: 2}}>
      <GridItem>
    <Heading>{game.name}</Heading>
    <ExpandableText>{game.description_raw}</ExpandableText>
    <GameAttributes game={game} />
      </GridItem>
      <GridItem>
    <GameTrailer gameId={game.id} />
    <GameScreenshots gameId={game.id} />
      </GridItem>
    </SimpleGrid>
  </>;
};

export default GameDetailPage;
