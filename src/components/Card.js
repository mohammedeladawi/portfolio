import { Heading, HStack, Image, Text, VStack, Box } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  return (
    <Box
      bg="white"
      color="black"
      borderRadius="lg"
      style={{ overflow: "hidden" }}
    >
      <Image src={imageSrc} />
      <VStack p="3" alignItems="start" spacing="3">
        <Heading as="h3" size="md">
          {title}
        </Heading>
        <Text style={{ color: "#aaa" }}>{description}</Text>
        <HStack style={{ cursor: "pointer" }}>
          <Text as="span">See more</Text>
          <FontAwesomeIcon icon={faArrowRight} size="1x" />
        </HStack>
      </VStack>
    </Box>
  );
};

export default Card;
