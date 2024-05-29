import {
  Avatar,
  Box,
  Button,
  Container,
  Heading,
  Textarea,
} from "@chakra-ui/react";
import { FaImages } from "react-icons/fa";

export function Post() {
  return (
    <>
      <Container borderBottom="1px solid grey" p="10px">
        <Heading fontSize="30px" color="white" p="10px 0">
          Home
        </Heading>
        <Box display="flex" alignItems="center" gap="5px">
          <Avatar
            name="profpic"
            src="https://images.pexels.com/photos/18581955/pexels-photo-18581955/free-photo-of-man-between-skyscrapers.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          ></Avatar>
          <Textarea
            h="80px"
            color="white"
            placeholder="What's happening?!"
            resize="none"
          />
          <Box display="flex" alignItems="center" gap="10px">
            <FaImages fontSize="30px" color="white" />
            <Button
              bg="blue.500"
              size="sm"
              color="white"
              fontSize="13px"
              borderRadius="20px"
              _hover={{ bg: "blue.200" }}
            >
              Post
            </Button>
          </Box>
        </Box>
      </Container>
    </>
  );
}
