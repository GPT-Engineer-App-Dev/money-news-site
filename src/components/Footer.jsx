import { Box, Flex, Link, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box bg="gray.800" color="white" px={4} py={2} mt={10}>
      <Flex justify="space-between" align="center">
        <Text fontSize="sm">&copy; 2023 Financial Times</Text>
        <Flex>
          <Link href="/contact" px={2} py={1} _hover={{ textDecoration: "none", bg: "gray.700" }}>
            Contact
          </Link>
          <Link href="/privacy" px={2} py={1} _hover={{ textDecoration: "none", bg: "gray.700" }}>
            Privacy Policy
          </Link>
          <Link href="/terms" px={2} py={1} _hover={{ textDecoration: "none", bg: "gray.700" }}>
            Terms of Service
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Footer;