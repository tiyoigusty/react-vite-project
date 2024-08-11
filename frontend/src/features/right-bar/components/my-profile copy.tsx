import {
  Avatar,
  Box,
  Button,
  Container,
  Heading,
  Input,
  Modal,
  ModalContent,
  ModalOverlay,
  Text,
  Textarea,
  useDisclosure,
} from "@chakra-ui/react";
import { FaRegTimesCircle, FaUpload } from "react-icons/fa";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { useProfile } from "../hooks/use-profile";

export function MyProfile() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const currentUser = useSelector((state: RootState) => state.auth.user);
  console.log("ini user", currentUser);

  const { handleSubmit, onSubmit, register } = useProfile(currentUser.id);

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
              backgroundImage={currentUser.background}
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
              onClick={onOpen}
            >
              Edit Profile
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
              <Box display="flex" alignItems="center" gap="10px">
                {currentUser?._count?.followed ? (
                  <Text fontWeight="bold" fontSize="14px">
                    {currentUser?._count?.followed}
                    <span style={{ fontWeight: "normal" }}>
                      {" "}
                      Following
                    </span>{" "}
                  </Text>
                ) : (
                  <Text fontWeight="bold" fontSize="14px">
                    0<span style={{ fontWeight: "normal" }}> Following</span>{" "}
                  </Text>
                )}

                {currentUser?._count?.followers ? (
                  <Text fontWeight="bold" fontSize="14px">
                    {currentUser?._count?.followers}
                    <span style={{ fontWeight: "normal" }}> Follower</span>{" "}
                  </Text>
                ) : (
                  <Text fontWeight="bold" fontSize="14px">
                    0<span style={{ fontWeight: "normal" }}> Follower</span>{" "}
                  </Text>
                )}
              </Box>
            </Text>
          </Box>
        </Box>

        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent borderRadius="25px">
            <Box
              color="white"
              bg="rgb(40, 40, 40)"
              borderRadius="10px"
              p="10px"
            >
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <Heading fontSize="20px" color="white" p="10px 0">
                  Edit Profile
                </Heading>
                <Box>
                  <Button
                    bg="transparent"
                    size="sm"
                    color="white"
                    _hover={{ bg: "transparent" }}
                    onClick={onClose}
                  >
                    <FaRegTimesCircle fontSize="20px" />
                  </Button>
                </Box>
              </Box>

              <form onSubmit={handleSubmit(onSubmit)}>
                <Box
                  w="100%"
                  display="flex"
                  flexDir="column"
                  alignItems="center"
                >
                  <Box
                    w="100%"
                    h="120px"
                    backgroundImage={currentUser.background}
                    backgroundPosition="center"
                    backgroundSize="cover"
                    borderRadius="20px"
                  >
                    <label
                      htmlFor="upload-background"
                      style={{
                        cursor: "pointer",
                        position: "absolute",
                        top: "90px",
                        left: "200px",
                      }}
                    >
                      <Box
                        w="50px"
                        h="50px"
                        borderRadius="50%"
                        backdropFilter="blur(5px)"
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                      >
                        <FaUpload fontSize="25px" color="black" />
                      </Box>
                    </label>
                    <input
                      type="file"
                      id="upload-background"
                      style={{ display: "none" }}
                      {...register("background")}
                    />
                  </Box>
                  <Avatar
                    mt="-50px"
                    ml="-260px"
                    size="xl"
                    border="2px solid rgb(40, 40, 40)"
                    src={currentUser.photoProfile}
                  ></Avatar>
                  <label
                    htmlFor="upload-image"
                    style={{
                      cursor: "pointer",
                      position: "absolute",
                      top: "150px",
                      left: "75px",
                    }}
                  >
                    <Box
                      w="40px"
                      h="40px"
                      borderRadius="50%"
                      backdropFilter="blur(5px)"
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                    >
                      <FaUpload fontSize="20px" color="black" />
                    </Box>
                  </label>
                  <input
                    type="file"
                    id="upload-image"
                    style={{ display: "none" }}
                    {...register("photoProfile")}
                  />
                </Box>

                <Input
                  my="10px"
                  placeholder="FullName"
                  {...register("fullName")}
                />
                <Input
                  mb="10px"
                  placeholder="Username"
                  {...register("username")}
                />
                <Textarea
                  mb="10px"
                  resize="none"
                  placeholder="Bio"
                  {...register("bio")}
                />

                <Box display="flex" justifyContent="flex-end">
                  <Button
                    type="submit"
                    bg="blue.500"
                    size="sm"
                    w="25%"
                    color="white"
                    fontSize="13px"
                    borderRadius="20px"
                    _hover={{ bg: "blue.200" }}
                    onClick={onClose}
                  >
                    Save
                  </Button>
                </Box>
              </form>
            </Box>
          </ModalContent>
        </Modal>
      </Container>
    </>
  );
}
