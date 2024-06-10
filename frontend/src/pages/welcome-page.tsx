import { Box, Button, Heading } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

function WelcomePage() {
  const navigate = useNavigate();

  function loginSubmit() {
    navigate("/auth/login");
  }

  function registerSubmit() {
    navigate("/auth/register");
  }

  return (
    <>
      <Box display="flex" justifyContent="center">
        <Box
          color="white"
          w="400px"
          height="100vh"
          display="flex"
          flexDir="column"
          justifyContent="center"
        >
          <Box display="flex" justifyContent="center" gap="10px">
            <Heading>Welcome to</Heading>
            <Heading color="blue.500">circle</Heading>
          </Box>
          <Box display="flex" justifyContent="center">
            <Button
              bg="blue.500"
              size="sm"
              w="30%"
              color="white"
              fontSize="13px"
              borderRadius="20px"
              transition="ease-in-out .5s"
              _hover={{ bg: "blue.200", w: "50%" }}
              mr="-15px"
              onClick={registerSubmit}
            >
              Register
            </Button>
            <Button
              bg="blue.500"
              size="sm"
              w="30%"
              color="white"
              fontSize="13px"
              borderRadius="20px"
              transition="ease-in-out .5s"
              _hover={{ bg: "blue.200", w: "50%" }}
              ml="-15px"
              onClick={loginSubmit}
            >
              Login
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default WelcomePage;
