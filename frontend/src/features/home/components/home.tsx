import { Box, Heading } from "@chakra-ui/react";
import { useThread } from "../hooks/use-thread";
import { Post } from "./post";
import { ThreadCard } from "./thread";

export function Home() {
  const { threads } = useThread();

  return (
    <>
      <Box w="600px" borderRight="1px solid grey" borderLeft="1px solid grey">
        <Heading fontSize="30px" p="10px" color="white">
          Home
        </Heading>

        <Post />

        {threads?.map((thread) => (
          <ThreadCard thread={thread} />
        ))}
      </Box>
    </>
  );
}
