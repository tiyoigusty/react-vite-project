import { Avatar, Box, Button, Image, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { FaHeart, FaRegCommentDots } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import { useParams } from "react-router-dom";
import { api } from "../../../libs/api";
import { ThreadEntity } from "../../home/entities/thread";

export function ReplyPerson() {
  const [isLiked, setIsLiked] = useState<boolean>(false);

  const [data, setData] = useState<ThreadEntity[]>([]);

  const { id } = useParams();

  async function getThread() {
    const response = await api.get("/replies/" + id);
    setData(response.data);
  }

  useEffect(() => {
    getThread();
  }, []);

  return (
    <>
      {data.map((data) => {
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
                <Avatar name="profpic" src={data?.user?.photoProfile}></Avatar>
              </Box>

              <Box>
                <Box display="flex" alignItems="center" gap="5px">
                  <Text fontSize="16px" fontWeight="bold">
                    {data?.user?.fullName}
                  </Text>
                  <Text fontSize="12px" fontWeight="light">
                    @{data?.user?.username}
                  </Text>
                  <GoDotFill fontSize="8px" />
                  <Text fontSize="14px" fontWeight="light">
                    {data?.time}
                  </Text>
                </Box>
                <Text fontSize="14px" p="5px 0">
                  {data?.content}
                </Text>
                <Image
                  src={data?.image}
                  borderRadius="10px"
                  pb="5px"
                  w="400px"
                />
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
          </>
        );
      })}
    </>
  );
}
