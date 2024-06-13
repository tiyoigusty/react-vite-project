import { Box, Heading, Link, Text } from "@chakra-ui/react";
import { LoginForm } from "../features/auth/components/login";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const navigate = useNavigate();
  
  function register() {
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
          <Heading color="blue.500" fontSize="50px">
            circle
          </Heading>
          <Heading fontSize="30px">Login to Circle</Heading>
          <LoginForm />
          <Text>
            Don't have an account yet?{" "}
            <Link color="blue.500" onClick={register}>
              Create Account
            </Link>
          </Text>
        </Box>
      </Box>
    </>
  );
}

export default LoginPage;
