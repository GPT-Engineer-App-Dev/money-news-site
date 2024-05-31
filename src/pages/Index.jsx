import { Box, Container, Flex, Heading, Image, Text, VStack } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <Flex direction={{ base: "column", md: "row" }} justify="space-between">
        <Box flex="3" mr={{ md: 4 }}>
          <Heading as="h1" size="xl" mb={4}>
            Latest News
          </Heading>
          <VStack spacing={4} align="stretch">
            <Box p={4} shadow="md" borderWidth="1px">
              <Heading as="h2" size="md">Headline 1</Heading>
              <Text mt={2}>Summary of the news article 1...</Text>
              <Image src="https://via.placeholder.com/150" alt="News 1" mt={2} />
            </Box>
            <Box p={4} shadow="md" borderWidth="1px">
              <Heading as="h2" size="md">Headline 2</Heading>
              <Text mt={2}>Summary of the news article 2...</Text>
              <Image src="https://via.placeholder.com/150" alt="News 2" mt={2} />
            </Box>
          </VStack>
        </Box>
        <Box flex="1" mt={{ base: 4, md: 0 }}>
          <Heading as="h2" size="lg" mb={4}>
            Market Data
          </Heading>
          <Box p={4} shadow="md" borderWidth="1px">
            <Text>Stock Prices and Indices will be displayed here.</Text>
          </Box>
        </Box>
      </Flex>
    </Container>
  );
};

export default Index;