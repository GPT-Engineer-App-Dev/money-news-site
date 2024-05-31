import { Box, Text, Link } from "@chakra-ui/react";

const Markets = () => (
  <Box p={4}>
    <Text fontSize="2xl" mb={4}>Markets</Text>
    <Text>Market data will be displayed here.</Text>
    <Link href="/">Back to Home</Link>
  </Box>
);

export default Markets;