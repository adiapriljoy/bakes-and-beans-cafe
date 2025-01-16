import {
  Box,
  InputGroup,
  InputLeftElement,
  Icon,
  Input,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";

const SearchTable: React.FC<{
  search: string;
  setSearch: (search: string) => void;
}> = ({ search, setSearch }) => {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <Box display="flex" justifyContent="flex-end" mb={5}>
      <InputGroup maxW="200px">
        <InputLeftElement pointerEvents="none">
          <Icon as={FiSearch} color={isFocused ? "primary" : "gray.500"} />
        </InputLeftElement>
        <Input
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
      </InputGroup>
    </Box>
  );
};

export default SearchTable;
