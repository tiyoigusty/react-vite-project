import { Avatar, Box, Button, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { api } from "../../../libs/api";
import { RootState } from "../../../redux/store";
import useFollow from "../../right-bar/components/hooks/use-follow";
import { UserSearch } from "../types/search";

export function CardSearch({ data }: { data: UserSearch }) {
  const currentUser = useSelector((state: RootState) => state.auth.user);

  const { handleClick } = useFollow({ followingId: data.id });
  // const { isFollow, changeStatus } = useFollowFriend(isFollow);

  const [Follow, setIsFollow] = useState<boolean>();

  async function getDataFollow() {
    const isFollow = await api.get(`/cek-follow/${data.id}/${currentUser.id}`);
    setIsFollow(isFollow.data);
    console.log("isfollow", isFollow);
  }

  useEffect(() => {
    getDataFollow();
  }, []);

  const buttonFollow = () => {
    handleClick();
    setIsFollow(!Follow);
    // changeStatus();
  };

  return (
    <Box
      mt="15px"
      pb="15px"
      borderBottom="1px solid grey"
      display="flex"
      gap="10px"
      justifyContent="space-between"
      alignItems="center"
    >
      <Box display="flex" alignItems="center" gap="10px">
        <Avatar size="md" src={data.photoProfile}></Avatar>
        <Box>
          <Link to={`/user-profile/${data.id}`}>
            <Text fontSize="12px" fontWeight="bold">
              {data.fullName}
            </Text>
          </Link>
          <Text fontSize="12px">@{data.username}</Text>
          <Text fontSize="12px" fontWeight="lighter">
            {data.bio}
          </Text>
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
  );
}
