import { Box, Heading } from "@chakra-ui/react";
import { ResetPasswordForm } from "../features/auth/components/reset-password";

function ResetPasswordPage() {
  return (
    <>
    <Box display="flex" justifyContent="center">
      <Box color="white" w="400px" height="100vh" display="flex" flexDir="column" justifyContent="center">
        <Heading color="blue.500" fontSize="50px">
          circle
        </Heading>
        <Heading fontSize="30px">Reset Password</Heading>
        <ResetPasswordForm/>
      </Box>
    </Box>
    </>
  );
}

export default ResetPasswordPage;
