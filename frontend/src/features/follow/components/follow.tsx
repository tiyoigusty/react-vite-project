import { Tabs, TabList, Tab, TabPanels, TabPanel, Box } from "@chakra-ui/react";

export function Follow() {
  return (
    <>
    <Box color="white" m="10px" p="10px" w="600px">
      <Tabs isFitted variant="enclosed">
        <TabList mb="1em">
          <Tab>Following</Tab>
          <Tab>Follower</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <p>Following</p>
          </TabPanel>
          <TabPanel>
            <p>Follower</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
      </Box>
    </>
  );
}
