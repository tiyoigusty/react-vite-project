import {
  Avatar,
  Box,
  Button,
  Heading,
  LinkBox,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text
} from "@chakra-ui/react";
import { FaArrowLeft } from "react-icons/fa";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { MyThread } from "./my-thread";
import { MyMedia } from "./my-media";
import { Link } from "react-router-dom";


export function Profile() {
  const currentUser = useSelector((state: RootState) => state.auth.user);

  return (
    <>
      <Box color="white" w="600px" borderRight="1px solid grey" borderLeft="1px solid grey">
        <Heading fontSize="20px" color="white" display="flex" alignItems="center">
        <Button bg="transparent" _hover={{ bg: "transparent" }} color="white"><FaArrowLeft /></Button> Agik Gigih Sulistyo
        </Heading>
        <Box
          color="white"
          p="10px"
        >
          <Box w="100%" display="flex" flexDir="column" alignItems="center">
            <Box
              w="100%"
              h="100px"
              backgroundImage={currentUser.background}
              backgroundPosition="center"
              backgroundSize="cover"
              borderRadius="20px"
            ></Box>
            <Avatar
              mt="-50px"
              ml="-400px"
              size="xl"
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
              mr="-400px"
            >
              <LinkBox>
                <Link to={"/edit-profile/" + currentUser.id}>Edit Profile</Link>
              </LinkBox>
            </Button>
          </Box>
          <Box pl="10px" mt="-5px">
            <Text fontSize="20px" fontWeight="bold">
              {currentUser.fullName}
            </Text>
            <Text fontSize="12px" fontWeight="light">
              @{currentUser.username}
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

      <Box color="white" p="10px" w="600px">
        <Tabs isFitted variant="enclosed">
          <TabList mb="1em">
            <Tab>All Post</Tab>
            <Tab>Media</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <MyThread />
            </TabPanel>
            <TabPanel>
              <MyMedia />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
      </Box>
    </>
  );
}
