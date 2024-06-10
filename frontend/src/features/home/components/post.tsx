import {
  Avatar,
  Box,
  Button,
  Heading,
  Input
} from "@chakra-ui/react";
import { useThread } from "../hooks/use-thread";

export function Post() {
  const { register, handleSubmit, onSubmit } = useThread();

  return (
    <>
      <Box borderBottom="1px solid grey" p="10px" color="white">
        <Heading fontSize="30px" p="10px 0">
          Home
        </Heading>
        <Box display="flex" alignItems="center" gap="5px">
          <Avatar
            name="photoProfile"
            src="https://images.pexels.com/photos/18581955/pexels-photo-18581955/free-photo-of-man-between-skyscrapers.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          ></Avatar>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Box display="flex" alignItems="center" gap="10px">
              <Input
                {...register("content")}
                type="text"
                placeholder="What's happening?!"
                w="300px"
              />
              <Input type="file" {...register("image")} />
              <Button
                type="submit"
                color="white"
                bg="blue.500"
                size="sm" 
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
