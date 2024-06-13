import {
  Avatar,
  Box,
  Button,
  FormLabel,
  Heading,
  Input,
} from "@chakra-ui/react";

export function Profile() {
  return (
    <>
      <Box color="white" m="10px" p="10px" w="600px">
        <Heading fontSize="20px" color="white">
          Edit Profile
        </Heading>
        <Box bg="rgb(40, 40, 40)" mt="15px" borderRadius="20px" p="20px">
          <Box w="100%" display="flex" flexDir="column" alignItems="center">
            <Box
              w="100%"
              h="200px"
              backgroundImage="https://images.pexels.com/photos/954599/pexels-photo-954599.jpeg?auto=compress&cs=tinysrgb&w=600"
              backgroundPosition="center"
              backgroundSize="cover"
              borderRadius="20px"
            >
              <Button
                size="sm"
                float="right"
                m="10px 10px 0 0"
                bg="blue.500"
                color="white"
                fontSize="13px"
                borderRadius="10px"
                boxShadow="2px 2px 2px black"
                _hover={{ bg: "blue.200" }}
              >
                Upload Background
              </Button>
            </Box>
            <Avatar
              mt="-50px"
              ml="-400px"
              size="xl"
              border="2px solid rgb(40, 40, 40)"
              src=""
            ></Avatar>
            <form action="">
              <FormLabel>Photo Profile</FormLabel>
              <Input type="file" />
            </form>
          </Box>
        </Box>

        <Box bg="rgb(40, 40, 40)" mt="15px" borderRadius="20px" p="20px">
          <Heading>Personal Information</Heading>
          <form action="">
            <FormLabel>Full Name</FormLabel>
            <Input type="text" />
            <FormLabel>Username</FormLabel>
            <Input type="text" />
            <FormLabel>Bio</FormLabel>
            <Input type="text" />

            <Box display="flex" justifyContent="center">
              <Button
                size="sm"
                w="50%"
                m="10px"
                bg="blue.500"
                color="white"
                fontSize="13px"
                borderRadius="10px"
                boxShadow="2px 2px 2px black"
                _hover={{ bg: "blue.200" }}
              >
                Save
              </Button>
            </Box>
          </form>
        </Box>
      </Box>
    </>
  );
}
