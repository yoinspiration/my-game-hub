import useScreenshots from "../hooks/useScreenshots.ts";
import {Image, SimpleGrid} from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url.ts";

interface Props {
  gameId: number
}

const GameScreenshots = ({gameId}: Props) => {
  const {data, isLoading, error} = useScreenshots(gameId)
  
  if (error || isLoading) return null;
  
  return <SimpleGrid spacing={2} columns={{base: 1, md: 2}}>
    {data?.results.map(screenshot => <Image key={screenshot.id} src={getCroppedImageUrl(screenshot.image)} alt='' /> )}
  </SimpleGrid>;
};

export default GameScreenshots;
