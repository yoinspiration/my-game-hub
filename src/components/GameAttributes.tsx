import DefinitionItem from "./DefinitionItem.tsx";
import {SimpleGrid, Text} from "@chakra-ui/react";
import CriticScore from "./CriticScore.tsx";
import Game from "../entities/Game.ts";

interface Props {
  game: Game
}

const GameAttributes = ({game}: Props) => {
  return <SimpleGrid columns={2} as='dl'>
    <DefinitionItem term='Platform'>{game.parent_platforms.map(({platform}) => <Text key={platform.id}>{platform.name}</Text>)}</DefinitionItem>
    <DefinitionItem term='Metascore'>
      <CriticScore score={game.metacritic} />
    </DefinitionItem>
    <DefinitionItem term='Genres'>
      {game.genres.map(g => <Text key={g.id}>{g.name}</Text> )}
    </DefinitionItem>
    <DefinitionItem term='Publishers'>
      {game.publishers.map(p => <Text key={p.id}>{p.name}</Text> )}
    </DefinitionItem>
  </SimpleGrid>;
};

export default GameAttributes;
