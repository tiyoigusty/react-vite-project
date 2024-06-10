import { Box, Heading, Link, Text } from "@chakra-ui/react";
import { RegisterForm } from "../features/auth/components/register";

function RegisterPage() {
  return (
    <>
    <Box display="flex" justifyContent="center">
      <Box color="white" w="400px" height="100vh" display="flex" flexDir="column" justifyContent="center">
        <Heading color="blue.500" fontSize="50px">
          circle
        </Heading>
        <Heading fontSize="30px">Create account Circle</Heading>
        <RegisterForm />
        <Text>Already have account? <Link color="blue.500" href="#">Login</Link></Text>
      </Box>
    </Box>
    </>
  );
}

export default RegisterPage;
