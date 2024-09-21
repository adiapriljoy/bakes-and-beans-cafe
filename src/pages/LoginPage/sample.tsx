import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import { Button, HStack, Input, Select, Text, useDisclosure, VStack } from "@chakra-ui/react";
import React, { useState } from "react";

const SamplePage = () => {
  
  const { isOpen, onToggle } = useDisclosure();

  return (
    <>
      <VStack>
        <p>This is login page</p>
        <Input w="full" variant="outline" type="text" placeholder="Username" disabled/>
        <Button w="full"> Log in </Button>
        <HStack>
            <Text color="text">Show</Text>
            <Select
              onClick={onToggle}
              variant="outline"
              bg="background"
              size={{ base: "sm", md: "md" }}
              icon={isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </Select>
            <Text color="text">entries</Text>
          </HStack>
      </VStack>
    </>
  );
};

export default SamplePage;
