import {Input, InputGroup, InputLeftElement} from "@chakra-ui/react";
import {BsSearch} from "react-icons/bs";

const SearchInput = () => {
  return <InputGroup>
    <Input borderRadius={20} placeholder='Search games...' variant='filled'/>
    <InputLeftElement><BsSearch /></InputLeftElement>
  </InputGroup>;
};

export default SearchInput;
