import { Box, Input } from "@chakra-ui/react";
import { useSearch } from "../hooks/search";
import { CardSearch } from "./card";

export function Search() {
  const { data, handleChange } = useSearch();

  return (
    <>
      <Box
        w="600px"
        p="20px"
        color="white"
        borderRight="1px solid grey"
        borderLeft="1px solid grey"
        height="100vh"
      >
        <Input
          onChange={handleChange}
          bg="rgb(40, 40, 40)"
          placeholder="Search..."
        />
        {data.map((data) => {
          return (
            <>
              <CardSearch key={data.id} data={data} />
            </>
          );
        })}
      </Box>
    </>
  );
}
