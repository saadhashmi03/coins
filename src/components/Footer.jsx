import { Avatar, Box, Stack, Text, VStack , Flex , Link, IconButton} from "@chakra-ui/react";
import React from "react";
import { FaTwitter, FaFacebook, FaLinkedin, FaGithub } from 'react-icons/fa';


const avatarSrc = "https://avatars.githubusercontent.com/u/116589433?v=4";

const Footer = () => {
  return (
    <Box
      bgColor={"blackAlpha.900"}
      color={"whiteAlpha.700"}
      minH={"48"}
      px={"16"}
      py={["16", "8"]}
    >
      <Stack direction={["column", "row"]} h={"full"} alignItems={"center"}>
        <VStack w={"full"} alignItems={["center", "flex-start"]}>
          <Text fontWeight={"bold"} fontSize={'lg'} mb={'4'}>About Us</Text>
          <Text
            fontSize={"sm"}
            letterSpacing={"widest"}
            textAlign={['center', "left"]}
          >
            We are the best crypto trading app in India, we provide our guidance
            at a very good price.
          </Text>
        </VStack>

        <VStack>
          <Avatar boxSize={"28"} mt={["4", "0"]}  src={avatarSrc}  />
          <Text>Our Founder</Text>
        </VStack>
      </Stack>
     
     
      <Box as="footer"    color={"whiteAlpha.700"}    >
      <Flex direction="column" align={['center','start']} justify="center" >
        <Text fontSize="lg" mb="4"  fontWeight={'bold'}>
          Connect with us:
        </Text>
        <Flex>
          <Link href="#" isExternal mx="2">
            <IconButton
              aria-label="Twitter"
              icon={<FaTwitter />}
              variant="ghost"
              fontSize="20px"
            />
          </Link>
          <Link href="#" isExternal mx="2">
            <IconButton
              aria-label="Facebook"
              icon={<FaFacebook />}
              variant="ghost"
              fontSize="20px"
            />
          </Link>
          <Link href="#" isExternal mx="2">
            <IconButton
              aria-label="LinkedIn"
              icon={<FaLinkedin />}
              variant="ghost"
              fontSize="20px"
            />
          </Link>
          <Link href="#" isExternal mx="2">
            <IconButton
              aria-label="GitHub"
              icon={<FaGithub />}
              variant="ghost"
              fontSize="20px"
            />
          </Link>
        </Flex>
        <Text mt="4" fontSize="sm" 
            letterSpacing={"widest"}
            textAlign={['center', "left"]}>
          © {new Date().getFullYear()} CryptoWebsite. All rights reserved.
        </Text>
      </Flex>
    </Box>
    </Box>
    
  );
};

export default Footer;

