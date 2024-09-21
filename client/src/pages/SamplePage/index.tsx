import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  HStack,
  Input,
  Select,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { useFetchUsers } from "../../hooks/useUserQueries";
import { Link } from "react-router-dom";

const SamplePage = () => {
  const { data: users } = useFetchUsers();
  const { isOpen, onToggle } = useDisclosure();

  return (
    <>
      <VStack>
        <Button as={Link} to={"/sample-create-user"}>Create User</Button>
        <p>This is login page</p>
        <Input
          w="md"
          variant="outline"
          type="text"
          placeholder="Username"
          disabled
        />
        <Button w="md"> Log in </Button>
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
        <HStack>
          {users?.map((value, key) => {
            return (
              <Box key={key}>
                  <Text>Username: {value.username}</Text>
                  <Text>First name: {value.firstname}</Text>
                  <Text>Last name: {value.lastname}</Text>
                  <Text>Role: {value.role}</Text>
              </Box>
            );
          })}
        </HStack>
      </VStack>
    </>
  );
};

export default SamplePage;
