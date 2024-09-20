import { Box, Center, Spinner, Text } from '@chakra-ui/react';

const Loading = () => {
  return (
    <Center height="100%" flexDirection="column" >
      <Spinner
        size="xl"
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="primary"
      />
      <Box mt={4}>
        <Text fontSize="lg" color="gray.600">
          Loading, please wait...
        </Text>
      </Box>
    </Center>
  );
}

export default Loading
