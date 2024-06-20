import {
  Avatar,
  Box,
  Button,
  Heading,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text
} from "@chakra-ui/react";
import { FaArrowLeft } from "react-icons/fa";

export function Profile() {
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
              backgroundImage="https://images.pexels.com/photos/954599/pexels-photo-954599.jpeg?auto=compress&cs=tinysrgb&w=600"
              backgroundPosition="center"
              backgroundSize="cover"
              borderRadius="20px"
            ></Box>
            <Avatar
              mt="-50px"
              ml="-400px"
              size="xl"
              border="2px solid rgb(40, 40, 40)"
              src="https://images.pexels.com/photos/954599/pexels-photo-954599.jpeg?auto=compress&cs=tinysrgb&w=600"
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
              Edit Profile
            </Button>
          </Box>
          <Box pl="10px" mt="-5px">
            <Text fontSize="20px" fontWeight="bold">
              Agik Gigih Sulistyo
            </Text>
            <Text fontSize="12px" fontWeight="light">
              @agikgigih98
            </Text>
            <Text fontSize="14px" py="10px">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quasi quisquam tenetur vitae libero quos, harum voluptatibus consectetur repudiandae maiores.
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
              <p>Post Thread</p>
            </TabPanel>
            <TabPanel>
              <p>Media Cntrol</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
      </Box>
    </>
  );
}
