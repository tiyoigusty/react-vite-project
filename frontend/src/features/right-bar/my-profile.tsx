import {
  Avatar,
  Box,
  Button,
  Container,
  Heading,
  Text,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

export function MyProfile() {
  const currentUser = useSelector((state: RootState) => state.auth.user);

  return (
    <>
      <Container w="400px">
        <Box
          color="white"
          bg="rgb(40, 40, 40)"
          mt="15px"
          borderRadius="10px"
          p="10px"
        >
          <Heading fontSize="20px" color="white" p="10px 0">
            My Profile
          </Heading>
          <Box w="100%" display="flex" flexDir="column" alignItems="center">
            <Box
              w="100%"
              h="70px"
              backgroundImage="https://images.pexels.com/photos/954599/pexels-photo-954599.jpeg?auto=compress&cs=tinysrgb&w=600"
              backgroundPosition="center"
              backgroundSize="cover"
              borderRadius="20px"
            ></Box>
            <Avatar
              mt="-35px"
              ml="-260px"
              size="lg"
              border="2px solid rgb(40, 40, 40)"
              src={currentUser.photoProfile}
            ></Avatar>
            <Button
              bg="blue.500"
              size="sm"
              w="25%"
              color="white"
              fontSize="13px"
              borderRadius="20px"
              _hover={{ bg: "blue.200" }}
              mt="-23px"
              mr="-260px"
            >
              Edit Profile
            </Button>
          </Box>
          <Box pl="10px" mt="-5px">
            <Text fontSize="20px" fontWeight="bold">
              {currentUser.fullName}
            </Text>
            <Text fontSize="12px" fontWeight="light">
              {currentUser.username}
            </Text>
            <Text fontSize="14px" py="10px">
              {currentUser.bio}
            </Text>
            <Text fontWeight="bold" fontSize="14px">
              2342 <span style={{ fontWeight: "normal" }}>Following</span> 3453{" "}
              <span style={{ fontWeight: "normal" }}>Followers</span>
            </Text>
          </Box>
        </Box>
      </Container>
    </>
  );
}
