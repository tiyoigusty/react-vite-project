import { Box, Button, Input, Text } from "@chakra-ui/react";
import { useLoginForm } from "../hooks/use-login-form";

export function LoginForm() {
  const { handleSubmit, onSubmit, register } = useLoginForm();

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
            Forgot password?
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
