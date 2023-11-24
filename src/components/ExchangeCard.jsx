import { VStack, Image, Heading, Text } from "@chakra-ui/react";
import React from "react";

const ExchangeCard = ({ name, img, url, rank }) => {
  return (
    <>
      <a href={url} target={"blank"}>
        <VStack
          w={"52"}
          shadow={"lg"}
          borderRadius={"lg"}
          p={"8"}
          transition={"all 0.3s"}
          m={"4"}
          css={{
            "&:hover": {
              transform: "scale(1.1)",
            },
          }}
          cursor={'pointer'}
        >
          <Image src={img} w={"10"} objectFit={"contain"} alt={"Exchange"} />

          <Heading size={"md"} noOfLines={1}>
            {rank}
          </Heading>
          <Text noOfLines={1}>{name}</Text>
        </VStack>
      </a>
    </>
  );
};

export default ExchangeCard;
