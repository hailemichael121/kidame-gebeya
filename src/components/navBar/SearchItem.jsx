import { InputGroup, Input, InputLeftAddon } from "@chakra-ui/react";
import { LuSearch } from "react-icons/lu";

const SearchItem = () => {
  return (
    <InputGroup>
      <InputLeftAddon>
        <LuSearch />
      </InputLeftAddon>
      <Input
        borderRadius={25}
        placeholder="Search Items..."
        variant={"filled"}
      />
    </InputGroup>
  );
};

export default SearchItem;
