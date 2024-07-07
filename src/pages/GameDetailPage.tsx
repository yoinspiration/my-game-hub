import {useParams} from "react-router-dom";
import useGame from "../hooks/useGame.ts";
import {Spinner, Text, Heading} from "@chakra-ui/react";
import ExpandableText from "../components/ExpandableText.tsx";
import GameAttributes from "../components/GameAttributes.tsx";

const GameDetailPage = () => {
  const {slug} = useParams()
  const {data: game, isLoading, error} = useGame(slug!)
  
  if (isLoading) return <Spinner />
  
  if (error || !game) return <Text>{error?.message}</Text>;
  
  return <>
    <Heading>{game.name}</Heading>
    <ExpandableText>{game.description_raw}</ExpandableText>
    <GameAttributes game={game} />
  </>;
};

export default GameDetailPage;