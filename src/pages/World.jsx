import { Box, Text, Link } from "@chakra-ui/react";

const World = () => (
  <Box p={4}>
    <Text fontSize="2xl" mb={4}>World</Text>
    <Text>World news articles will be displayed here.</Text>
    <Link href="/">Back to Home</Link>
  </Box>
);

export default World;