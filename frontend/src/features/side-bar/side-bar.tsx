import {
  Box,
  Button,
  Container,
  Heading,
  LinkBox,
  List,
  ListItem,
} from "@chakra-ui/react";

import { FaSearch } from "react-icons/fa";
import { ImHome } from "react-icons/im";
import { MdAccountCircle } from "react-icons/md";
import { RiLogoutBoxFill, RiUserFollowFill } from "react-icons/ri";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../../redux/store";

export function SideBar() {
  const currentUser = useSelector((state: RootState) => state.auth.user);
  
  async function logout() {
    localStorage.removeItem("token");
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

          <List color="white">
            <ListItem py="10px">
              <LinkBox>
                <Link to={"/home"}>
                <Box display="flex" alignItems="center" gap="5px" mb="20px">
                  <ImHome />
                  Home
                  </Box>
                </Link>
              </LinkBox>
            </ListItem>
            <ListItem pb="10px">
              <LinkBox>
                <Link to={"/search"}>
                <Box display="flex" alignItems="center" gap="5px" mb="20px">
                  <FaSearch />
                  Search
                  </Box>
                </Link>
              </LinkBox>
            </ListItem>
            <ListItem pb="10px">
              <LinkBox>
                <Link to={"/follow"}>
                <Box display="flex" alignItems="center" gap="5px" mb="20px">
                  <RiUserFollowFill />
                  Follows
                  </Box>
                </Link>
              </LinkBox>
            </ListItem>
            <ListItem pb="10px">
              <LinkBox>
                <Link to={"/profile/"+currentUser.id}>
                <Box display="flex" alignItems="center" gap="5px" mb="20px">
                  <MdAccountCircle />
                  Profile
                  </Box>
                </Link>
              </LinkBox>
            </ListItem>
            <ListItem>
              <LinkBox>
                <Link to={"/home"}>
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
                </Link>
              </LinkBox>
            </ListItem>
          </List>
        </Box>

        <LinkBox color="white">
          <Link to={"/auth/login"} onClick={logout}>
            <Box display="flex" alignItems="center" gap="5px" mb="20px">
              <RiLogoutBoxFill />
              Logout
            </Box>
          </Link>
        </LinkBox>
      </Container>
    </>
  );
}
