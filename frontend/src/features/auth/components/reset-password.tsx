import { Box, Input, Button } from "@chakra-ui/react";
import { useLoginForm } from "../hooks/use-login-form";

export function ResetPasswordForm() {
  const { handleSubmit, onSubmit, register } = useLoginForm();

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box p="10px 0">
          <Input
            {...register("password")}
            type="text"
            placeholder="New Password"
            mb="10px"
          />
          <Input
            {...register("password")}
            type="text"
            placeholder="Confirm New Password"
            mb="10px"
          />
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
            Send Instruction
          </Button>
        </Box>
      </form>
    </>
  );
}
