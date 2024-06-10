import { Avatar, Box, BoxProps, Image, Text } from "@chakra-ui/react";
import { useState } from "react";
import { FaHeart, FaRegCommentDots } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import { ThreadEntity } from "../entities/thread";

interface ThreadCardProps extends BoxProps {thread: ThreadEntity}

export function ThreadCard({thread}: ThreadCardProps) {
  const [isLiked, setIsLiked] = useState<boolean>(false);

  return (
    <>
      <Box
        p="10px"
        color="white"
        display="flex"
        gap="10px"
        borderBottom="1px solid grey"
      >
        <Box>
          <Avatar name="profpic" src={thread.user.photoProfile}></Avatar>
        </Box>

        <Box>
          <Box display="flex" alignItems="center" gap="5px">
            <Text fontSize="16px" fontWeight="bold">
              {thread.user.fullName}
            </Text>
            <Text fontSize="12px" fontWeight="light">
              @{thread.user.username}
            </Text>
            <GoDotFill fontSize="8px" />
            <Text fontSize="14px" fontWeight="light">
              5 hour
            </Text>
          </Box>
          <Text fontSize="14px" p="5px 0">
            {thread.content}
          </Text>
          <Image src={thread.image} borderRadius="10px" pb="5px" w="400px" />
          <Box display="flex" alignItems="center" gap="10px">
            <Text display="flex" alignItems="center" gap="5px" fontSize="14px">
              {isLiked ? (
                <>
                  <FaHeart color="red" cursor="pointer" onClick={() => setIsLiked(false)}/> 234 Likes
                </>
              ) : (
                <>
                  <FaHeart cursor="pointer" onClick={() => setIsLiked(true)}/> 234 Likes
                </>
              )}
            </Text>
            <Text display="flex" alignItems="center" gap="5px" fontSize="14px">
              <FaRegCommentDots /> 456 Replies
            </Text>
          </Box>
        </Box>
      </Box>
    </>
  );
}
