import { Avatar, Box, Button, Input } from "@chakra-ui/react";
import { LuImagePlus } from "react-icons/lu";
import { useThread } from "../hooks/use-thread";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";

export function Post() {
  const { register, handleSubmit, onSubmit } = useThread();

  const currentUser = useSelector((state: RootState) => state.auth.user);

  return (
    <>
      <Box borderBottom="1px solid grey" p="10px" color="white">
        <Box w="100%" display="flex" alignItems="center" gap="5px">
          <Avatar
            name="photoProfile"
            src={currentUser.photoProfile}
          ></Avatar>

          <form onSubmit={handleSubmit(onSubmit)}>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              gap="15px"
            >
              <Input
                type="text"
                placeholder="What's happening?!"
                w="400px"
                {...register("content")}
              />
              <label htmlFor="upload-image" style={{ cursor: "pointer" }}>
                <LuImagePlus fontSize="25px" />
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
                size="sm"
                w="70px"
                fontSize="13px"
                borderRadius="20px"
                _hover={{ bg: "blue.200" }}
              >
                Post
              </Button>
            </Box>
          </form>
          
        </Box>
      </Box>
    </>
  );
}
