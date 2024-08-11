import {
  Avatar,
  Box,
  Button,
  Heading,
  LinkBox,
  Textarea,
} from "@chakra-ui/react";
import { LuImagePlus } from "react-icons/lu";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { useThread } from "../hooks/use-thread";
import { FaRegTimesCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

export function EditThread() {
  const { register, handleSubmit, onSubmit } = useThread();

  const currentUser = useSelector((state: RootState) => state.auth.user);

  return (
    <>
      <Box
        w="100%"
        h="100vh"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Box
          p="15px"
          color="white"
          bg="rgb(40, 40, 40)"
          borderRadius="20px"
          boxShadow="3px 3px 6px white"
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            mb="20px"
          >
            <Heading fontSize="20px" color="white" p="10px 0">
              Edit Thread
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
            <Box display="flex" gap="20px">
              <Avatar
                size="xl"
                name="photoProfile"
                src={currentUser.photoProfile}
              />
              <Textarea
                placeholder="What's happening?!"
                w="500px"
                h="100px"
                resize="none"
                {...register("content")}
              />
            </Box>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              mt="10px"
              ml="150px"
              mr="40px"
            >
              <label htmlFor="upload-image" style={{ cursor: "pointer" }}>
                <LuImagePlus fontSize="30px" />
              </label>
              <input
                type="file"
                id="upload-image"
                style={{ display: "none" }}
                {...register("image")}
              />
              <Button
                type="submit"
                color="white"
                bg="blue.500"
                size="md"
                w="70px"
                fontSize="13px"
                borderRadius="20px"
                _hover={{ bg: "blue.200" }}
              >
                Edit
              </Button>
            </Box>
          </form>
        </Box>
      </Box>
    </>
  );
}
