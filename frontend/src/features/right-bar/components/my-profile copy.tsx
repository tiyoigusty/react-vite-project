import {
  Avatar,
  Box,
  Button,
  Container,
  Heading,
  Input,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { FaRegTimesCircle, FaUpload } from "react-icons/fa";
import { useState } from "react";
import { useProfile } from "../hooks/use-profile";

export function MyProfile() {
  const currentUser = useSelector((state: RootState) => state.auth.user);

  const [onEdit, setOnEdit] = useState<boolean>(true);

  const {handleSubmit, onSubmit, register} = useProfile()

  return (
    <>
      <Container w="400px">
        {onEdit ? (
          <>
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
                  onClick={() => {
                    setOnEdit(false);
                  }}
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
                  2342 <span style={{ fontWeight: "normal" }}>Following</span>{" "}
                  3453 <span style={{ fontWeight: "normal" }}>Followers</span>
                </Text>
              </Box>
            </Box>
          </>
        ) : (
          <>
            <Box
              color="white"
              bg="rgb(40, 40, 40)"
              mt="15px"
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
                    onClick={() => {
                      setOnEdit(true);
                    }}
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
                    h="100px"
                    backgroundImage="https://images.pexels.com/photos/954599/pexels-photo-954599.jpeg?auto=compress&cs=tinysrgb&w=600"
                    backgroundPosition="center"
                    backgroundSize="cover"
                    borderRadius="20px"
                  >
                    <label
                      htmlFor="upload-background"
                      style={{
                        cursor: "pointer",
                        position: "absolute",
                        top: "100px",
                        left: "180px",
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
                    mt="-35px"
                    ml="-260px"
                    size="lg"
                    border="2px solid rgb(40, 40, 40)"
                    src={currentUser.photoProfile}
                  ></Avatar>
                  <label
                    htmlFor="upload-image"
                    style={{
                      cursor: "pointer",
                      position: "absolute",
                      top: "145px",
                      left: "50px",
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

                <Input my="10px" placeholder="FullName" {...register("fullName")} />
                <Input mb="10px" placeholder="Username" {...register("username")} />
                <Textarea mb="10px" resize="none" placeholder="Bio" {...register("bio")} />

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
                  >
                    Save
                  </Button>
                </Box>
              </form>
            </Box>
          </>
        )}
      </Container>
    </>
  );
}
