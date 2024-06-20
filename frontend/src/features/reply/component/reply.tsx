import { Box, Button, Heading } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { api } from "../../../libs/api";
import { Post } from "../../home/components/post";
import { ReplyEntity } from "../entities/reply";
import { ReplyCard } from "./reply-card";
import { ReplyPerson } from "./reply-person";

export function Reply() {
  const [replies, setReplies] = useState<ReplyEntity[]>()
    
  async function getReplies() {
    const response = await api.get("/replies")
    setReplies(response.data)
  }

  useEffect(() => {
    getReplies()
  }, [])
  
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
          <Post />
        </Box>

        {replies?.map((reply) => {
          return <ReplyPerson reply={reply} />
        })}
      </Box>
    </>
  );
}
