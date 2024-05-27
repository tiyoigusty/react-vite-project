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

export function SideBar() {
  return (
    <>
      <Container w="250px" h="480px" display="flex" flexDirection="column" justifyContent="space-between">
        <Box>
          <Box>
            <Heading color="blue.500" fontSize="50px">
              circle
            </Heading>
          </Box>

          <List>
            <ListItem
              display="flex"
              alignItems="center"
              gap="10px"
              fontSize="15px"
              color="white"
              py="20px"
            >
              <ImHome />
              Home
            </ListItem>
            <ListItem
              display="flex"
              alignItems="center"
              gap="10px"
              fontSize="15px"
              color="white"
              pb="20px"
            >
              <FaSearch />
              Search
            </ListItem>
            <ListItem
              display="flex"
              alignItems="center"
              gap="10px"
              fontSize="15px"
              color="white"
              pb="20px"
            >
              <RiUserFollowFill />
              Follows
            </ListItem>
            <ListItem
              display="flex"
              alignItems="center"
              gap="10px"
              fontSize="15px"
              color="white"
              pb="20px"
            >
              <MdAccountCircle />
              Profile
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
        >
          <RiLogoutBoxFill />
          Logout
        </Box>
      </Container>
    </>
  );
}
