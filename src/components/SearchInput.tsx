import {Input, InputGroup, InputLeftElement} from "@chakra-ui/react";
import {BsSearch} from "react-icons/bs";
import {useRef} from "react";

interface Props {
  onSearch: (searchText: string) => void
}

const SearchInput = ({onSearch}: Props) => {
  const ref = useRef<HTMLInputElement>(null)
  
  return (
    <form onSubmit={(e) => {
      e.preventDefault()
      if (ref.current) onSearch(ref.current.value)
    }}>
      <InputGroup>
        <Input
          ref={ref}
          borderRadius={20}
          placeholder="Search games..."
          variant="filled"
        />
        <InputLeftElement>
          <BsSearch/>
        </InputLeftElement>
      </InputGroup>
    </form>
  );
};

export default SearchInput;
