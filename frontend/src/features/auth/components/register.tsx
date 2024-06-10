import { Box, BoxProps, Button, Input } from "@chakra-ui/react";
import { useRegisterForm } from "../hooks/use-register-form";

interface RegisterProps extends BoxProps {}

export function RegisterForm(props: RegisterProps) {
  const {handleChange,handleSubmit} = useRegisterForm()
  return (
    <>
      <Box {...props} p="10px 0">
        <Input
          onChange={handleChange}
          name="fullName"
          type="text"
          placeholder="FullName"
          required
          mb="10px"
        />
        <Input
          onChange={handleChange}
          name="username"
          type="text"
          placeholder="Username"
          required
          mb="10px"
        />
        <Input
          onChange={handleChange}
          name="email"
          type="text"
          placeholder="Email"
          required
          mb="10px"
        />
        <Input
          onChange={handleChange}
          name="password"
          type="password"
          placeholder="Password"
          required
        />
        <Button
          bg="blue.500"
          size="sm"
          w="100%"
          m="10px 0"
          color="white"
          borderRadius="20px"
          _hover={{ bg: "blue.200" }}
          onClick={handleSubmit}
        >
          Create
        </Button>
      </Box>
    </>
  );
}
