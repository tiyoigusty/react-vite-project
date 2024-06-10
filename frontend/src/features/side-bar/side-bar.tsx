import {
  Box,
  Button,
  Container,
  Heading,
  List,
  ListItem,
} from "@chakra-ui/react";

import { FaSearch } from "react-icons/fa";
import { ImHome } from "react-icons/im";
import { MdAccountCircle } from "react-icons/md";
import { RiLogoutBoxFill, RiUserFollowFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

export function SideBar() {
  const navigate = useNavigate();

  function homePage() {
    navigate("/home");
  }
  function searchPage() {
    navigate("/search");
  }
  function followPage() {
    navigate("/follow");
  }
  function profilePage() {
    navigate("/profile");
  }

  return (
    <>
      <Container
        w="250px"
        h="100vh"
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
      >
        <Box>
          <Box>
            <Heading color="blue.500" fontSize="50px">
              circle
            </Heading>
          </Box>

          <List>
            <ListItem py="10px">
              <Button onClick={homePage} bg="transparent" color="white" gap="5px" _hover={{ bg: "transparent"}}>
                <ImHome />
                Home
              </Button>
            </ListItem>
            <ListItem pb="10px">
              <Button onClick={searchPage} bg="transparent" color="white" gap="5px" _hover={{ bg: "transparent"}}>
                <FaSearch />
                Search
              </Button>
            </ListItem>
            <ListItem pb="10px">
              <Button onClick={followPage} bg="transparent" color="white" gap="5px" _hover={{ bg: "transparent"}}>
                <RiUserFollowFill />
                Follows
              </Button>
            </ListItem>
            <ListItem pb="10px" >
              <Button onClick={profilePage} bg="transparent" color="white" gap="5px" _hover={{ bg: "transparent"}}>
                <MdAccountCircle />
                Profile
              </Button>
            </ListItem>
            <ListItem>
              <Button
                bg="blue.500"
                size="sm"
                w="100%"
                color="white"
                fontSize="13px"
                borderRadius="20px"
                _hover={{ bg: "blue.200" }}
              >
                Create Post
              </Button>
            </ListItem>
          </List>
        </Box>

        <Box
          display="flex"
          alignItems="center"
          gap="10px"
          fontSize="15px"
          color="white"
          mb="20px"
        >
          <RiLogoutBoxFill />
          Logout
        </Box>
      </Container>
    </>
  );
}
