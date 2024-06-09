import { Container, Text, VStack, Box, Heading } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
          <Heading fontSize="4xl" fontWeight="bold" color="brand.700">Hello World</Heading>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;