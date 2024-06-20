import { Box, Button, Input, Text } from "@chakra-ui/react";
import { useLoginForm } from "../hooks/use-login-form";
import { useNavigate } from "react-router-dom";

export function LoginForm() {
  const { handleSubmit, onSubmit, register } = useLoginForm();
  const navigate = useNavigate()

  function forgotPassword() {
    navigate("/auth/forgot-password")
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box p="10px 0">
          <Input
            {...register("email")}
            type="text"
            placeholder="Email"
            mb="10px"
          />
          {/* <Text color="red" display="flex" justifyContent="center" mb="10px">{errors.email?.message}</Text> */}
          <Input
            {...register("password")}
            type="password"
            placeholder="Password"
          />
          <Text display="flex" justifyContent="end">
            <Button onClick={forgotPassword} bg="transparent" color="white" _hover={{ bg: "transparent"}} >
            Forgot password?
            </Button>
          </Text>
          <Button
            type="submit"
            bg="blue.500"
            size="sm"
            w="100%"
            m="10px 0"
            color="white"
            borderRadius="20px"
            _hover={{ bg: "blue.200" }}
          >
            Login
          </Button>
        </Box>
      </form>
    </>
  );
}
