import {useParams} from "react-router-dom";
import useGame from "../hooks/useGame.ts";
import {Spinner, Text, Heading} from "@chakra-ui/react";

const GameDetailPage = () => {
  const {slug} = useParams()
  const {data: game, isLoading, error} = useGame(slug!)
  
  if (isLoading) return <Spinner />
  
  if (error || !game) return <Text>{error?.message}</Text>;
  
  return <>
  <Heading>{game.name}</Heading>
    <Text>{game.description_raw}</Text>
  </>;
};

export default GameDetailPage;
