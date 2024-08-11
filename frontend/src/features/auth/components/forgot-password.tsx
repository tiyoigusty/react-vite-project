import { Box, Button, Input } from "@chakra-ui/react";

export function ForgotPasswordForm() {
  return (
    <>
      <form>
        <Box p="10px 0">
          <Input type="text" placeholder="Email" mb="10px" />
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
