import { Box } from "@chakra-ui/react";
import { Follow } from "../features/follow/components/follow";
import { DevelopedBy } from "../features/right-bar/developed-by";
import { MyProfile } from "../features/right-bar/my-profile";
import { SuggestionTab } from "../features/right-bar/suggestion-tab";
import { SideBar } from "../features/side-bar/side-bar";

export function FollowPage() {
  return (
    <>
      <Box display="flex" justifyContent="center">
        <Box>
          <SideBar />
        </Box>
        <Box borderRight="1px solid grey" borderLeft="1px solid grey">
          <Follow />
        </Box>
        <Box>
          <MyProfile />
          <SuggestionTab />
          <DevelopedBy />
        </Box>
      </Box>
    </>
  );
}
