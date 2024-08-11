import { Avatar, Box, Button, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { api } from "../../../libs/api";
import { RootState } from "../../../redux/store";
import useFollow from "../../right-bar/components/hooks/use-follow";
import { FollowingEntity } from "../entities/follow";

export function CardFollow({ data }: { data: FollowingEntity }) {
  const currentUser = useSelector((state: RootState) => state.auth.user);

  const { handleClick } = useFollow({ followingId: data.id });
  // const { isFollow, changeStatus } = useFollowFriend(isFollow);

  const [Follow, setIsFollow] = useState<boolean>();

  async function getDataFollow() {
    const isFollow = await api.get(`/cek-follow/${data.id}/${currentUser.id}`);
    setIsFollow(isFollow.data);
    // console.log("isfollow", isFollow);
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
      pb="5px"
      borderBottom="1px solid grey"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
    >
      <Box display="flex" alignItems="center" gap="10px">
        <Avatar size="md" src={data?.follower?.photoProfile} />
        <Box>
          <Text fontSize="12px" fontWeight="bold">
            {data?.follower?.fullName}
          </Text>
          <Text fontSize="12px">@{data?.follower?.username}</Text>
          <Text fontSize="12px">{data?.follower?.bio}</Text>
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
          {!Follow ? "Following" : "Follow"}
        </Button>
      </Box>
    </Box>
  );
}
