import {
  Avatar,
  Box,
  BoxProps,
  Button,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { FaHeart, FaRegCommentDots } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import { useNavigate } from "react-router-dom";
import { ThreadEntity } from "../entities/thread";

interface ThreadCardProps extends BoxProps {
  thread: ThreadEntity;
}

export function ThreadCard({ thread }: ThreadCardProps) {
  const [isLiked, setIsLiked] = useState<boolean>(false);
  const navigate = useNavigate();

  function reply() {
    navigate("/replies");
  }

  return (
    <>
      <Box
        p="10px"
        color="white"
        display="flex"
        justifyContent="space-between"
        gap="10px"
        borderBottom="1px solid grey"
      >
        <Box display="flex" gap="10px">
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
              <Button
                bg="transparent"
                color="white"
                _hover={{ bg: "transparent" }}
                display="flex"
                alignItems="center"
                gap="5px"
                fontSize="14px"
              >
                {isLiked ? (
                  <>
                    <FaHeart
                      color="red"
                      cursor="pointer"
                      onClick={() => setIsLiked(false)}
                    />{" "}
                    234 Likes
                  </>
                ) : (
                  <>
                    <FaHeart
                      cursor="pointer"
                      onClick={() => setIsLiked(true)}
                    />{" "}
                    234 Likes
                  </>
                )}
              </Button>
              <Button
                onClick={reply}
                bg="transparent"
                color="white"
                gap="5px"
                _hover={{ bg: "transparent" }}
                display="flex"
                alignItems="center"
                fontSize="14px"
              >
                <FaRegCommentDots /> 456 Replies
              </Button>
            </Box>
          </Box>
        </Box>

        <Box>
          <Menu>
            <MenuButton
              px={4}
              py={2}
              transition="all 0.2s"
              borderRadius="md"
              borderWidth="1px"
              _hover={{ bg: "gray.400" }}
              _expanded={{ bg: "blue.400" }}
              _focus={{ boxShadow: "outline" }}
            >
              <BsThreeDots />
            </MenuButton>
            <MenuList color="black">
              <MenuItem>Edit</MenuItem>
              <MenuItem>Delete</MenuItem>
            </MenuList>
          </Menu>
        </Box>
      </Box>
    </>
  );
}
