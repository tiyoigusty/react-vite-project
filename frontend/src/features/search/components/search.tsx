import { Avatar, Box, Button, Input, Text } from "@chakra-ui/react";
import { useSearch } from "../hooks/search";

export function Search() {
  const {data,handleChange} = useSearch()

  return (
    <>
      <Box w="600px" p="20px" color="white">
        <Input onChange={handleChange} bg="rgb(40, 40, 40)" placeholder="Search..." />
        {data.map((user) => {
          return (
            <>
              <Box mt="15px" pb="15px" borderBottom="1px solid grey" display="flex" justifyContent="space-between" alignItems="center">
                <Box display="flex" alignItems="center" gap="10px">
                  <Avatar size="sm" src={user.photoProfile}></Avatar>
                  <Box>
                    <Text fontSize="12px" fontWeight="bold">
                      {user.fullName}
                    </Text>
                    <Text fontSize="12px">{user.username}</Text>
                    <Text fontSize="12px">{user.bio}</Text>
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
        })}
      </Box>
    </>
  );
}
