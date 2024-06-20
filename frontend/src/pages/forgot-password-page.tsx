import { Box, Heading, Link, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { ForgotPasswordForm } from "../features/auth/components/forgot-password";

function ForgotPasswordPage() {
  const navigate = useNavigate();
  
  function login() {
    navigate("/auth/login");
  }

  return (
    <>
    <Box display="flex" justifyContent="center">
      <Box color="white" w="400px" height="100vh" display="flex" flexDir="column" justifyContent="center">
        <Heading color="blue.500" fontSize="50px">
          circle
        </Heading>
        <Heading fontSize="30px">Forgot Password</Heading>
        <ForgotPasswordForm />
        <Text>Already have account? <Link color="blue.500" onClick={login}>Login</Link></Text>
      </Box>
    </Box>
    </>
  );
}

export default ForgotPasswordPage;
