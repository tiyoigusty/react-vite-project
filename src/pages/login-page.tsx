import { Box, Button, Container, FormControl, Heading, Input, Link, Text } from "@chakra-ui/react";

export function LoginPage() {
    return (
        <>
        <Container color="white" w="400px" height="100vh" display="flex" alignItems="center">
            <Box>
                <Heading color="blue.500" fontSize="50px">circle</Heading>
                <Heading fontSize="30px">Login to Circle</Heading>
                <FormControl p="15px 0">
                    <Input type="text" placeholder="Email/Username" required mb="10px"/>
                    <Input type="password" placeholder="Password" required/>
                </FormControl>
                <Text display="flex" justifyContent="end">Forgot password?</Text>
                <Button bg="blue.500"
                    size="sm"
                    w="100%"
                    m="10px 0"
                    color="white"
                    borderRadius="20px"
                    _hover={{ bg: "blue.200" }}>Login</Button>
                <Text>Don't have an account yet? <Link color="blue.500" href="#">Create Account</Link></Text>
            </Box>
        </Container>
        </>
    )
}