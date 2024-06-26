import { Box, Button, Heading } from "@chakra-ui/react";
import { FaArrowLeft } from "react-icons/fa";
import { PostReply } from "./post-reply";
import { ReplyCard } from "./reply-card";
import { ReplyPerson } from "./reply-person";

export function Reply() {
  return (
    <>
      <Box w="600px" borderRight="1px solid grey" borderLeft="1px solid grey">
        <Heading
          fontSize="20px"
          color="white"
          display="flex"
          alignItems="center"
        >
          <Button bg="transparent" _hover={{ bg: "transparent" }} color="white">
            <FaArrowLeft />
          </Button>{" "}
          Status
        </Heading>

        <ReplyCard />

        <Box bg="rgb(40, 40, 40)">
          <PostReply />
        </Box>

        <ReplyPerson />
      </Box>
    </>
  );
}
