import { Avatar, Box, Container, Img, Text } from "@chakra-ui/react";
import { useState } from "react";
import { FaHeart, FaRegCommentDots } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";

interface CardProps {
  profpic: string;
  name: string;
  username: string;
  time: number;
  quote: string;
  image?: string;
  like: number;
  reply: number;
}

export function Thread({
  profpic,
  name,
  username,
  time,
  quote,
  image,
  like,
  reply,
}: CardProps) {
  const [isLiked, setIsLiked] = useState<boolean>(false);

  return (
    <>
      <Container
        p="10px"
        color="white"
        display="flex"
        gap="10px"
        borderBottom="1px solid grey"
      >
        <Box>
          <Avatar name="profpic" src={profpic}></Avatar>
        </Box>

        <Box>
          <Box display="flex" alignItems="center" gap="5px">
            <Text fontSize="16px" fontWeight="bold">
              {name}
            </Text>
            <Text fontSize="12px" fontWeight="light">
              {username}
            </Text>
            <GoDotFill fontSize="8px" />
            <Text fontSize="14px" fontWeight="light">
              {time} hour
            </Text>
          </Box>
          <Text fontSize="14px" p="5px 0">
            {quote}
          </Text>
          <Img src={image} borderRadius="10px" pb="5px" />
          <Box display="flex" alignItems="center" gap="10px">
            <Text display="flex" alignItems="center" gap="5px" fontSize="14px">
              {isLiked ? (
                <>
                  <FaHeart color="red" cursor="pointer" onClick={() => setIsLiked(false)}/> {like} Likes
                </>
              ) : (
                <>
                  <FaHeart cursor="pointer" onClick={() => setIsLiked(true)}/> {like} Likes
                </>
              )}
            </Text>
            <Text display="flex" alignItems="center" gap="5px" fontSize="14px">
              <FaRegCommentDots /> {reply} Replies
            </Text>
          </Box>
        </Box>
      </Container>
    </>
  );
}
