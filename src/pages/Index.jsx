import { Container, Text, VStack } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="4xl" fontWeight="bold" color="teal.500">Hello World</Text>
        <Text fontSize="lg" color="gray.600">Welcome to your first React application with Chakra UI!</Text>
      </VStack>
    </Container>
  );
};

export default Index;