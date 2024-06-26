import { useEffect, useState } from "react";
import { UserEntity } from "../../home/entities/user";
import { api } from "../../../libs/api";
import { Box, Avatar, Button, Text } from "@chakra-ui/react";

export function Followings() {
  const [data, setData] = useState<UserEntity>();

  async function getData() {
    const response = await api("/users");
    setData(response.data);
  }

  useEffect(() => {
    getData();
  }, []);

  console.log(data);

  return (
    <>
      <Box
        pb="5px"
        borderBottom="1px solid grey"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Box display="flex" alignItems="center" gap="10px">
          <Avatar size="md" src="" />
          <Box>
            <Text fontSize="12px" fontWeight="bold">
              Agik Gigih
            </Text>
            <Text fontSize="12px">@agikgigih</Text>
            <Text fontSize="12px">Hello World</Text>
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
          >
            Follow
          </Button>
        </Box>
      </Box>
    </>
  );
}
