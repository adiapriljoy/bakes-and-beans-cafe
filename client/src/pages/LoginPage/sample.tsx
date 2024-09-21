import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  HStack,
  Input,
  Select,
  Stack,
  Text,
  useDisclosure,
  useToast,
  VStack,
} from "@chakra-ui/react";
import { useFetchUsers } from "../../hooks/useUserQueries";

const SamplePage = () => {
  const { data: users } = useFetchUsers();
  const { isOpen, onToggle } = useDisclosure();
  const toast = useToast();

  return (
    <>
      <VStack>
        <Card variant="filled" size="lg" w="md" marginTop="25rem">
          <CardBody>
            <Stack spacing={4}>
              <Input type="text" placeholder="First name" size="lg"/>
              <Input type="text" placeholder="Last name" size="lg"/>
              <Input type="text" placeholder="Role" size="lg"/>
              <Input type="text" placeholder="Username" size="lg"/>
              <Input type="password" placeholder="Password" size="lg"/>
              
            </Stack>
          </CardBody>
          <CardFooter marginBottom="1rem">
              <Button w="full" 
                variant="rounded"
                onClick={() =>
                  toast({
                    title: 'Account created.',
                    description: "We've created your account for you.",
                    status: 'error',
                    duration: 9000,
                    isClosable: true,
                    variant: "subtle"
                  })
                }
              > LOG IN </Button>
          </CardFooter>
        </Card>
        <p>This is login page</p>
        <Input
          w="full"
          variant="outline"
          type="text"
          placeholder="Username"
          disabled
        />
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
        {users?.map((value, key) => {
          return (
            <Box key={key}>
              <hr />
              <VStack>
                <Text>Username: {value.username}</Text>
                <Text>First name: {value.firstname}</Text>
                <Text>Last name: {value.lastname}</Text>
                <Text>Role: {value.role}</Text>
              </VStack>
            </Box>
          );
        })}
      </VStack>
    </>
  );
};

export default SamplePage;
