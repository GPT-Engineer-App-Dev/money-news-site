import { Box, Text, Link } from "@chakra-ui/react";

const Opinion = () => (
  <Box p={4}>
    <Text fontSize="2xl" mb={4}>Opinion</Text>
    <Text>Opinion articles will be displayed here.</Text>
    <Link href="/">Back to Home</Link>
  </Box>
);

export default Opinion;