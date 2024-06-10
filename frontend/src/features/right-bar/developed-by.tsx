import { Box, Container, Text } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";

export function DevelopedBy() {
    return (
        <>
        <Container>
        <Box
          color="white"
          bg="rgb(40, 40, 40)"
          mt="15px"
          borderRadius="10px"
          p="10px"
        >
          <Text
            display="flex"
            alignItems="center"
            gap="5px"
            fontSize="14px"
            fontWeight="bold"
          >
            Developed by TiyoIgusty <GoDotFill fontSize="8px" /> <FaGithub />
            <FaLinkedin />
            <FaFacebook /> <FaInstagram />
          </Text>
          <Text display="flex" alignItems="center" gap="5px" fontSize="12px">
            Powered by DumbWays Indonesia <GoDotFill fontSize="8px" /> #1 Coding
            Bootcamp
          </Text>
        </Box>
        </Container>
        </>
    )
}