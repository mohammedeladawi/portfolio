import React from "react";
import { Avatar, Box, Center, Heading, VStack, Text } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Pete!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <Avatar size="lg" src="https://i.pravatar.cc/150?img=7" />
    <Text noOfLines={1} mt={2}>
      {greeting}
    </Text>

    <VStack spacing={2} style={{ marginTop: "1rem" }}>
      <Heading as="h3" size="xl">
        {bio1}
      </Heading>
      <Heading as="h3" size="xl">
        {bio2}
      </Heading>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
