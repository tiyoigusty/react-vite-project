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
  Text,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { api } from "../../../libs/api";
import { UserEntity } from "../../home/entities/user";
import { MyMediaUser } from "./my-media-user";
import { MyThreadUser } from "./my-thread-user";

export function UserProfile() {
  const [data, setData] = useState<UserEntity>();

  const { id } = useParams();

  async function getData() {
    const response = await api.get("/users/" + id);
    // console.log("ini data user", response.data);
    setData(response.data);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Box
        color="white"
        w="600px"
        borderRight="1px solid grey"
        borderLeft="1px solid grey"
      >
        <Heading
          fontSize="20px"
          color="white"
          display="flex"
          alignItems="center"
        >
          <Button bg="transparent" _hover={{ bg: "transparent" }} color="white">
            <Link to={"/home"}>
              <FaArrowLeft />
            </Link>
          </Button>{" "}
          {data?.fullName}
        </Heading>
        <Box color="white" p="10px">
          <Box w="100%" display="flex" flexDir="column" alignItems="center">
            <Box
              w="100%"
              h="100px"
              backgroundImage={data?.background}
              backgroundPosition="center"
              backgroundSize="cover"
              borderRadius="20px"
            ></Box>
            <Avatar
              mt="-50px"
              ml="-400px"
              size="xl"
              border="2px solid rgb(40, 40, 40)"
              src={data?.photoProfile}
            ></Avatar>
          </Box>
          <Box pl="10px">
            <Text fontSize="20px" fontWeight="bold">
              {data?.fullName}
            </Text>
            <Text fontSize="12px" fontWeight="light">
              @{data?.username}
            </Text>
            <Text fontSize="14px" py="10px">
              {data?.bio}
            </Text>
            <Box display="flex" alignItems="center" gap="10px">
              {data?._count?.followed ? (
                <Text fontWeight="bold" fontSize="14px">
                  {data?._count?.followed}
                  <span style={{ fontWeight: "normal" }}> Following</span>{" "}
                </Text>
              ) : (
                <Text fontWeight="bold" fontSize="14px">
                  0<span style={{ fontWeight: "normal" }}> Following</span>{" "}
                </Text>
              )}

              {data?._count?.followers ? (
                <Text fontWeight="bold" fontSize="14px">
                  {data?._count?.followers}
                  <span style={{ fontWeight: "normal" }}> Followers</span>
                </Text>
              ) : (
                <Text fontWeight="bold" fontSize="14px">
                  0<span style={{ fontWeight: "normal" }}> Followers</span>
                </Text>
              )}
            </Box>
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
                <MyThreadUser />
              </TabPanel>
              <TabPanel>
                <Box display="flex" gap="10px" flexWrap="wrap">
                  <MyMediaUser />
                </Box>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Box>
    </>
  );
}
