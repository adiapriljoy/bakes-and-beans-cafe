import { Flex, Select, Text } from "@chakra-ui/react";
import React from "react";

const EntriesSelector: React.FC<{
  entries: number;
  setEntries: (entries: number) => void;
  setCurrentPage: (page: number) => void;
}> = ({ entries, setEntries, setCurrentPage }) => {
  const entriesOptions = [5, 10, 20, 30, 50];
  return (
    <Flex gap={2} align="center">
      <Text>Show</Text>
      <Select
        maxW="70px"
        value={entries}
        onChange={(e) => {
          setEntries(Number(e.target.value));
          setCurrentPage(1);
        }}
      >
        {entriesOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </Select>
      <Text>entries</Text>
    </Flex>
  );
};

export default EntriesSelector;
