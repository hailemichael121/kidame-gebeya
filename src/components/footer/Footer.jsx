import React from "react";
import {
  Box,
  Text,
  Link,
  List,
  ListItem,
  Stack,
  Heading,
} from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box
      as="footer"
      py={8} // Increased padding for content
      bgColor="var(--color-footer)" // Applied primary color (replace with your preference)
      color="white" // Text color contrast
    >
      <Stack
        spacing={8}
        direction={["column", "row"]}
        justifyContent="space-between"
        alignItems="center"
      >
        {/* Information Box */}
        <Box borderRadius={5} py={4} px={6}>
          <Heading as="h3" size="md" mb={2}>
            Stay Connected & Informed
          </Heading>
          <Text>
            Subscribe to our newsletter to receive exclusive offers, new product
            announcements, and updates.
          </Text>
          <Link href="/subscribe" variant="primary" mt={2}>
            Subscribe Now
          </Link>
        </Box>

        {/* Navigation Links */}
        <Stack direction={["column", "row"]} spacing={4}>
          <List spacing={2}>
            <ListItem>
              <Link href="/about-us">About Us</Link>
            </ListItem>
            <ListItem>
              <Link href="/contact-us">Contact Us</Link>
            </ListItem>
            <ListItem>
              <Link href="/terms-and-conditions">Terms & Conditions</Link>
            </ListItem>
            <ListItem>
              <Link href="/privacy-policy">Privacy Policy</Link>
            </ListItem>
          </List>
          {/* Add social media links, payment icons, etc. here */}
        </Stack>

        {/* Copyright Text */}
        <Text fontSize="sm">
          Copyright © {new Date().getFullYear()} Your Company Name. All rights
          reserved.
        </Text>
      </Stack>
    </Box>
  );
};

export default Footer;
