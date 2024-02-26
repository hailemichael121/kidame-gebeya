import { InputGroup, Input, Stack, InputRightAddon } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";

const SearchItem = () => {
  return (
    <Stack spacing={10} alignSelf="center" justifyContent="space-around">
      <InputGroup>
        <Input
          borderRadius={2}
          bgColor="AppWorkspace"
          type="Search"
          placeholder=" Search Items ..."
          focusBorderColor="dark"
        />
        <InputRightAddon>
          <FaSearch />
        </InputRightAddon>
      </InputGroup>
    </Stack>
  );
};

export default SearchItem;
