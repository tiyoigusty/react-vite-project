import {
  Avatar,
  Box,
  Button,
  Container,
  Heading,
  Text,
} from "@chakra-ui/react";

import { GoDotFill } from "react-icons/go";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

export function RightBar() {
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
            <Box w="100%" h="70px" backgroundImage="https://images.pexels.com/photos/954599/pexels-photo-954599.jpeg?auto=compress&cs=tinysrgb&w=600" backgroundPosition="center" backgroundSize="cover" borderRadius="20px"></Box>
            <Avatar
              mt="-35px"
              ml="-260px"
              size="lg"
              border="2px solid rgb(40, 40, 40)"
              src="https://images.pexels.com/photos/18581955/pexels-photo-18581955/free-photo-of-man-between-skyscrapers.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            ></Avatar>
            <Button
              bg="blue.500"
              size="sm"
              w="25%"
              color="white"
              fontSize="13px"
              borderRadius="20px"
              _hover={{ bg: "blue.200" }}
              mt="-26px"
              mr="-260px"
            >
              Edit Profile
            </Button>
          </Box>
          <Box pl="10px" mt="-5px">
            <Text fontSize="20px" fontWeight="bold">
              Agik Gigih
            </Text>
            <Text fontSize="12px" fontWeight="light">
              @agikgigih98
            </Text>
            <Text fontSize="14px" py="10px">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti,
              commodi.
            </Text>
            <Text fontWeight="bold" fontSize="14px">
              2342 <span style={{ fontWeight: "normal" }}>Following</span> 3453{" "}
              <span style={{ fontWeight: "normal" }}>Followers</span>
            </Text>
          </Box>
        </Box>

        <Box
          color="white"
          bg="rgb(40, 40, 40)"
          mt="15px"
          borderRadius="10px"
          p="10px"
        >
          <Heading fontSize="20px" color="white" pb="10px">
            Suggested for you
          </Heading>
          <Box pb="10px">
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <Box display="flex" alignItems="center" gap="10px">
                <Avatar
                  size="sm"
                  src="https://asset-2.tstatic.net/kaltim/foto/bank/images/vanesha-prescilla-pernah-alami-stres.jpg"
                ></Avatar>
                <Box>
                  <Text fontSize="12px" fontWeight="bold">
                    Vanesha Prescilla
                  </Text>
                  <Text fontSize="12px">@vanesha_p</Text>
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
          </Box>
          <Box pb="10px">
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <Box display="flex" alignItems="center" gap="10px">
                <Avatar
                  size="sm"
                  src="https://asset-2.tstatic.net/kaltim/foto/bank/images/vanesha-prescilla-pernah-alami-stres.jpg"
                ></Avatar>
                <Box>
                  <Text fontSize="12px" fontWeight="bold">
                    Vanesha Prescilla
                  </Text>
                  <Text fontSize="12px">@vanesha_p</Text>
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
          </Box>
          <Box pb="10px">
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <Box display="flex" alignItems="center" gap="10px">
                <Avatar
                  size="sm"
                  src="https://asset-2.tstatic.net/kaltim/foto/bank/images/vanesha-prescilla-pernah-alami-stres.jpg"
                ></Avatar>
                <Box>
                  <Text fontSize="12px" fontWeight="bold">
                    Vanesha Prescilla
                  </Text>
                  <Text fontSize="12px">@vanesha_p</Text>
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
          </Box>
          <Box pb="10px">
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <Box display="flex" alignItems="center" gap="10px">
                <Avatar
                  size="sm"
                  src="https://asset-2.tstatic.net/kaltim/foto/bank/images/vanesha-prescilla-pernah-alami-stres.jpg"
                ></Avatar>
                <Box>
                  <Text fontSize="12px" fontWeight="bold">
                    Vanesha Prescilla
                  </Text>
                  <Text fontSize="12px">@vanesha_p</Text>
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
          </Box>
          <Box pb="10px">
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <Box display="flex" alignItems="center" gap="10px">
                <Avatar
                  size="sm"
                  src="https://asset-2.tstatic.net/kaltim/foto/bank/images/vanesha-prescilla-pernah-alami-stres.jpg"
                ></Avatar>
                <Box>
                  <Text fontSize="12px" fontWeight="bold">
                    Vanesha Prescilla
                  </Text>
                  <Text fontSize="12px">@vanesha_p</Text>
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
          </Box>
        </Box>

        <Box
          color="white"
          bg="rgb(40, 40, 40)"
          mt="15px"
          borderRadius="10px"
          p="10px"
        >
          <Text
            display="flex"
            alignItems="center"
            gap="5px"
            fontSize="14px"
            fontWeight="bold"
          >
            Developed by TiyoIgusty <GoDotFill fontSize="8px" /> <FaGithub />
            <FaLinkedin />
            <FaFacebook /> <FaInstagram />
          </Text>
          <Text display="flex" alignItems="center" gap="5px" fontSize="12px">
            Powered by DumbWays Indonesia <GoDotFill fontSize="8px" /> #1 Coding
            Bootcamp
          </Text>
        </Box>
      </Container>
    </>
  );
}
