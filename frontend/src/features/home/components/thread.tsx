import {
  Avatar,
  Box,
  BoxProps,
  Button,
  Heading,
  Image,
  LinkBox,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Modal,
  ModalContent,
  ModalOverlay,
  Text,
  Textarea,
  useDisclosure,
} from "@chakra-ui/react";
import { BsThreeDots } from "react-icons/bs";
import { FaHeart, FaRegCommentDots, FaRegTimesCircle } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import { LuImagePlus } from "react-icons/lu";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { api } from "../../../libs/api";
import { RootState } from "../../../redux/store";
import { ThreadEntity } from "../entities/thread";
import { useUpdateThread } from "../hooks/use-update-thread";

interface ThreadCardProps extends BoxProps {
  thread: ThreadEntity;
}

export function ThreadCard({ thread }: ThreadCardProps) {
  const currentUser = useSelector((state: RootState) => state.auth.user);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const { register, handleSubmit, onSubmit } = useUpdateThread(thread.id);

  async function deleteThread() {
    const response = await api.delete("/threads/" + thread.id);
    location.reload();
    return response.data;
  }

  return (
    <>
      <Box
        p="10px"
        color="white"
        display="flex"
        justifyContent="space-between"
        gap="10px"
        borderBottom="1px solid grey"
      >
        <Box display="flex" gap="10px">
          <Box>
            <Avatar name="profpic" src={thread?.user?.photoProfile} />
          </Box>

          <Box>
            <Box display="flex" alignItems="center" gap="5px">
              <Link to={`/user-profile/${thread?.user?.id}`}>
                <Text fontSize="16px" fontWeight="bold">
                  {thread?.user?.fullName}
                </Text>
              </Link>
              <Text fontSize="12px" fontWeight="light">
                @{thread?.user?.username}
              </Text>
              <GoDotFill fontSize="8px" />
              <Text fontSize="14px" fontWeight="light">
                {thread?.time}
              </Text>
            </Box>
            <Text fontSize="14px" p="5px 0">
              {thread?.content}
            </Text>
            <Image src={thread?.image} borderRadius="10px" pb="5px" w="400px" />
            <Box display="flex" alignItems="center" gap="10px">
              <Button
                bg="transparent"
                color="white"
                _hover={{ bg: "transparent" }}
                display="flex"
                alignItems="center"
                gap="5px"
                fontSize="14px"
              >
                <FaHeart color="red" cursor="pointer" /> {thread?._count?.likes} Likes
              </Button>
              <LinkBox>
                <Link to={`/threads/${thread.id}`}>
                  <Box
                    display="flex"
                    alignItems="center"
                    gap="5px"
                    fontSize="14px"
                  >
                    <FaRegCommentDots /> {thread?._count?.replies} Replies
                  </Box>
                </Link>
              </LinkBox>
            </Box>
          </Box>
        </Box>

        <Box>
          <Menu>
            <MenuButton
              px={4}
              py={2}
              transition="all 0.2s"
              borderRadius="md"
              borderWidth="1px"
              _hover={{ bg: "gray.400" }}
              _expanded={{ bg: "blue.400" }}
              _focus={{ boxShadow: "outline" }}
            >
              <BsThreeDots />
            </MenuButton>
            <MenuList color="black">
              <MenuItem>
                <Box w="100%">
                  <Button w="100%" onClick={onOpen}>
                    Edit
                  </Button>
                </Box>
              </MenuItem>
              <MenuItem>
                <Button w="100%" onClick={deleteThread}>
                  Delete
                </Button>
              </MenuItem>
            </MenuList>
          </Menu>
        </Box>

        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent borderRadius="25px">
            <Box w="600px" bg="rgb(40, 40, 40)" px="20px" borderRadius="20px">
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
                    onClick={onClose}
                  >
                    Post
                  </Button>
                </Box>

                <Box display="flex" justifyContent="center">
                  <Image src="" />
                </Box>
              </form>
            </Box>
          </ModalContent>
        </Modal>
      </Box>
    </>
  );
}
