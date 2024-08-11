import { Avatar, Box, Button, Image, LinkBox, Menu, MenuButton, MenuItem, MenuList, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { FaHeart, FaRegCommentDots } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { api } from "../../../libs/api";
import { RootState } from "../../../redux/store";
import { ThreadEntity } from "../../home/entities/thread";

export function MyThreadUser() {
    const currentUser = useSelector((state: RootState) => state.auth.user);
    
    const [isLiked, setIsLiked] = useState<boolean>(false);

    const [data, setData] = useState<ThreadEntity[]>([])

    const {id} = useParams()

    async function getThread() {
        const response = await api.get("/profiles/"+ id)
        setData(response.data)
    }

    useEffect(() => {
        getThread()
        console.log(data);
        
    }, [])

    return (
      <>
      {data.map((data) => {
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
              <Avatar name="profpic" src={data.user.photoProfile} />
            </Box>
  
            <Box>
              <Box display="flex" alignItems="center" gap="5px">
                <Text fontSize="16px" fontWeight="bold">
                  {data.user.fullName}
                </Text>
                <Text fontSize="12px" fontWeight="light">
                  @{data.user.username}
                </Text>
                <GoDotFill fontSize="8px" />
                <Text fontSize="14px" fontWeight="light">
                  5 hour
                </Text>
              </Box>
              <Text fontSize="14px" p="5px 0">
                {data.content}
              </Text>
              <Image src={data.image} borderRadius="10px" pb="5px" w="400px" />
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
                <LinkBox>
                  <Link to={`/threads/${currentUser.id}`}>
                  <Box display="flex" alignItems="center" gap="5px" fontSize="14px">
                    <FaRegCommentDots /> 456 Replies
                    </Box>
                  </Link>
                </LinkBox>
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
                <MenuItem>
                <Button w="100%">Edit</Button>
                </MenuItem>
                <MenuItem>
                <Button w="100%">Delete</Button>
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Box>
          </>
        )
      })}
      </>
    );
  }