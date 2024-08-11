import {
  Avatar,
  Box,
  Button,
  Image,
  Input,
  Modal,
  ModalContent,
  ModalOverlay,
  Textarea,
  useDisclosure,
} from "@chakra-ui/react";
import { FaRegTimesCircle } from "react-icons/fa";
import { LuImagePlus } from "react-icons/lu";
import { useThread } from "../hooks/use-thread";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";

export function Post() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { imagePreview, onImageChange, register, handleSubmit, onSubmit } = useThread();

  const currentUser = useSelector((state: RootState) => state.auth.user);

  return (
    <>
      <Box borderBottom="1px solid grey" p="10px" color="white">
        <Box w="100%" display="flex" alignItems="center" gap="5px">
          <Avatar
            name="photoProfile"
            src={currentUser.photoProfile}
          ></Avatar>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            gap="10px"
          >
            <Input
              type="text"
              placeholder="What's happening?!"
              w="400px"
              onClick={onOpen}
            />
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

        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent borderRadius="25px">
            <Box w="600px" bg="rgb(40, 40, 40)" px="20px" borderRadius="20px">
              <Box display="flex" justifyContent="flex-end" my="10px">
                <Button
                  onClick={onClose}
                  bg="transparent"
                  size="sm"
                  color="white"
                  _hover={{ bg: "transparent" }}
                >
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
                    src={currentUser.photoProfile}
                  ></Avatar>
                  <Textarea
                    placeholder="What's happening?!"
                    resize="none"
                    color="white"
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
                    <LuImagePlus fontSize="25px" color="white" />
                  </label>
                  <input
                    type="file"
                    id="upload-image"
                    style={{ display: "none" }}
                    {...register("image", {onChange: (e) => onImageChange(e)} )}
                    
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
                    onClick={onClose}
                  >
                    Post
                  </Button>
                </Box>

                <Box display="flex" justifyContent="center">
                  <Image src={imagePreview} />
                </Box>

              </form>
            </Box>
          </ModalContent>
        </Modal>
      </Box>
    </>
  );
}
