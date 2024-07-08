import useTrailers from "../hooks/useTrailers.ts";
import {Spinner, Text} from "@chakra-ui/react";

interface Props {
  gameId: number;
}

const GameTrailer = ({ gameId }: Props) => {
  const { data, error, isLoading } = useTrailers(gameId);
  
  if (error) return <Text>{error.message}</Text>;
  
  if (isLoading) return <Spinner />
  
  const first = data?.results[0]
  if (!first) return null
  return <video controls poster={first.preview} src={first.data['480']} />;
};

export default GameTrailer;
