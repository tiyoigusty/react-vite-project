import { Box, Button, Container, FormControl, Heading, Input, Link, Text } from "@chakra-ui/react";

export function RegisterPage () {
    return (
        <>
        <Container color="white" w="400px" height="100vh" display="flex" alignItems="center">
            <Box>
            <Heading color="blue.500" fontSize="50px">circle</Heading>
            <Heading fontSize="30px">Create account Circle</Heading>
            <FormControl p="15px 0">
                <Input type="text" placeholder="Fullname" required mb="10px"/>
                <Input type="text" placeholder="Email/Username" required mb="10px"/>
                <Input type="password" placeholder="Password" required/>
            </FormControl>
            <Button bg="blue.500"
                size="sm"
                w="100%"
                m="10px 0"
                color="white"
                borderRadius="20px"
                _hover={{ bg: "blue.200" }}>Create</Button>
            <Text>Already have account? <Link color="blue.500" href="#">Login</Link></Text>
            </Box>
        </Container>
        </>
    )
}