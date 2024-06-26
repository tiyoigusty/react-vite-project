import { Tabs, TabList, Tab, TabPanels, TabPanel, Box } from "@chakra-ui/react";
import { Followings } from "./followings";
import { Followers } from "./followers";

export function Follow() {
  return (
    <>
      <Box color="white" p="10px" w="600px"  borderRight="1px solid grey" borderLeft="1px solid grey">
        <Tabs isFitted variant="enclosed">
          <TabList mb="1em">
            <Tab>Following</Tab>
            <Tab>Follower</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Followings />
            </TabPanel>
            <TabPanel>
              <Followers />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </>
  );
}
