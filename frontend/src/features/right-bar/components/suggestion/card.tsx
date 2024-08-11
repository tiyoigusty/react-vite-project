import { Avatar, Box, Button, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { api } from "../../../../libs/api";
import { RootState } from "../../../../redux/store";
import useFollow from "../hooks/use-follow";
import { SugesstionCardTypes } from "./types";

export function Card({ data }: { data: SugesstionCardTypes }) {
  const currentUser = useSelector((state: RootState) => state.auth.user);
  
  const { handleClick } = useFollow({ followingId: data.id });
  // const { isFollow, changeStatus } = useFollowFriend(isFollow);

  const [Follow, setIsFollow] = useState<boolean>()
  
  async function getDataFollow() {
    const isFollow = await api.get(`/cek-follow/${data.id}/${currentUser.id}`)
    setIsFollow(isFollow.data)
    // console.log("isfollow",isFollow);
  }

  useEffect(() => {
    getDataFollow()
  }, [])

  

  const buttonFollow = () => {
    handleClick();
    setIsFollow(!Follow)
    // changeStatus();
  };

  return (
    <Box
      pb="10px"
      color="white"
      bg="rgb(40, 40, 40)"
      borderRadius="10px"
      borderBottom="1px solid grey"
      mt="10px"
    >
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Box display="flex" alignItems="center" gap="10px">
          <Avatar size="sm" src={data.photoProfile}></Avatar>
          <Box>
            <Link to={`/user-profile/}${data.id}`}>
              <Text fontSize="12px" fontWeight="bold">
                {data.fullName}
              </Text>
            </Link>
            <Text fontSize="12px">@{data.username}</Text>
          </Box>
        </Box>
        <Box>
          <Button
            bg="blue.500"
            size="sm"
            w="100%"
            color="white"
            fontSize="13px"
            borderRadius="20px"
            _hover={{ bg: "blue.200" }}
            onClick={buttonFollow}
          >
            {Follow ? "Following" : "Follow"}
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
