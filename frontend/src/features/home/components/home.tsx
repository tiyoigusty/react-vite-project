import { Box } from "@chakra-ui/react";
import { Post } from "./post";
import { useThread } from "../hooks/use-thread";
import { ThreadCard } from "./thread";

export function Home() {
  const { threads } = useThread();

  return (
    <>
      <Box w="600px">
        <Post />
        {threads?.map((thread) => <ThreadCard thread={thread} /> )}
      </Box>
    </>
  );
}
