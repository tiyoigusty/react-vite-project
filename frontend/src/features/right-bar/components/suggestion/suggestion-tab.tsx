import { Box, Container, Heading } from "@chakra-ui/react";
import { SuggestionList } from "./suggestion-list";

export function SuggestionTab() {
  return (
    <>
      <Container m="0">
        <Box
          color="white"
          bg="rgb(40, 40, 40)"
          mt="15px"
          borderRadius="10px"
          p="10px"
        >
          <Heading fontSize="20px" color="white" pb="10px">
            Suggested for you
          </Heading>

          <SuggestionList />
        </Box>
      </Container>
    </>
  );
}
