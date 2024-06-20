import {
  Avatar,
  Box,
  Button,
  Heading,
  Input,
  Textarea,
} from "@chakra-ui/react";
import { useThread } from "../hooks/use-thread";
import { FaRegTimesCircle } from "react-icons/fa";
import { LuImagePlus } from "react-icons/lu";
import { useState } from "react";

export function Post() {
  const { register, handleSubmit, onSubmit } = useThread();

  const [onFocused, setOnFocused] = useState<boolean>(true);

  return (
    <>
      <Box borderBottom="1px solid grey" p="10px" color="white">
        <Heading fontSize="30px" p="10px 0">
          Home
        </Heading>

        {onFocused ? (
          <>
            <Box w="100%" display="flex" alignItems="center" gap="5px">
              <Avatar
                name="photoProfile"
                src="https://images.pexels.com/photos/18581955/pexels-photo-18581955/free-photo-of-man-between-skyscrapers.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              ></Avatar>
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                gap="10px"
              >
                <Input type="text" placeholder="What's happening?!" w="400px" onFocus={() => {setOnFocused(false)}} />
                <LuImagePlus fontSize="25px" />
                <Input type="file" display="none" />
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
            </Box>
          </>
        ) : (
          <>
            <Box
              w="550px"
              zIndex="999"
              position="fixed"
              bg="black"
              p="10px"
              borderRadius="10px"
            >
              <Box display="flex" justifyContent="flex-end" my="10px">
                <Button onClick={() => {setOnFocused(true)}} bg="transparent" size="sm" color="white" _hover={{ bg: "transparent"}}>
                <FaRegTimesCircle fontSize="20px" />
                </Button>
              </Box>

              <form onSubmit={handleSubmit(onSubmit)}>
                <Box
                  display="flex"
                  gap="10px"
                  pb="10px"
                  borderBottom="1px solid grey"
                >
                  <Avatar
                    name="photoProfile"
                    src="https://images.pexels.com/photos/18581955/pexels-photo-18581955/free-photo-of-man-between-skyscrapers.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                  ></Avatar>
                  <Textarea
                    placeholder="What's happening?!"
                    resize="none"
                    {...register("content")}
                  />
                </Box>

                <Box
                  display="flex"
                  justifyContent="space-between"
                  mx="30px"
                  my="10px"
                >
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
                    w="80px"
                    fontSize="13px"
                    borderRadius="20px"
                    _hover={{ bg: "blue.200" }}
                  >
                    Post
                  </Button>
                </Box>
              </form>
            </Box>
          </>
        )}
      </Box>
    </>
  );
}
