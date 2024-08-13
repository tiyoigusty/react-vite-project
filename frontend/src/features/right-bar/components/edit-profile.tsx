import {
  Box,
  Heading,
  Button,
  Avatar,
  Input,
  Textarea,
  LinkBox,
} from "@chakra-ui/react";
import { FaRegTimesCircle, FaUpload } from "react-icons/fa";
import { useProfile } from "../hooks/use-profile";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { Link } from "react-router-dom";

export function EditProfile() {
  const currentUser = useSelector((state: RootState) => state.auth.user);
  const { handleSubmit, onSubmit, register } = useProfile(currentUser.id);

  return (
    <Box w="500px" m="60px auto">
      <Box color="white" bg="rgb(40, 40, 40)" borderRadius="10px" p="10px">
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Heading fontSize="20px" color="white" p="10px 0">
            Edit Profile
          </Heading>
          <Box>
            <Button
              bg="transparent"
              size="sm"
              color="white"
              _hover={{ bg: "transparent" }}
            >
              <LinkBox>
                <Link to={"/home"}>
                  <FaRegTimesCircle fontSize="20px" />
                </Link>
              </LinkBox>
            </Button>
          </Box>
        </Box>

        <form onSubmit={handleSubmit(onSubmit)}>
          <Box w="100%" display="flex" flexDir="column" alignItems="center">
            <Box
              w="100%"
              h="100px"
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
                  top: "85px",
                  left: "610px",
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
              ml="-320px"
              size="xl"
              border="2px solid rgb(40, 40, 40)"
              src={currentUser.photoProfile}
            ></Avatar>
            <label
              htmlFor="upload-image"
              style={{
                cursor: "pointer",
                position: "absolute",
                top: "135px",
                left: "452px",
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
                <FaUpload fontSize="20px" color="white" />
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
            >
              Save
            </Button>
          </Box>
        </form>
      </Box>
    </Box>
  );
}
