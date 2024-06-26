import { Box } from "@chakra-ui/react";
import { Follow } from "../features/follow/components/follow";
import { DevelopedBy } from "../features/right-bar/components/developed-by";
import { MyProfile } from "../features/right-bar/components/my-profile";
import { SuggestionTab } from "../features/right-bar/components/suggestion-tab";
import { SideBar } from "../features/side-bar/side-bar";

export function FollowPage() {
  return (
    <>
      <Box display="flex" justifyContent="center">
        <Box position="fixed" left="0">
          <SideBar />
        </Box>
        <Box position="absolute" left="250">
          <Follow />
        </Box>
        <Box position="absolute" left="850">
          <MyProfile />
          <SuggestionTab />
          <DevelopedBy />
        </Box>
      </Box>
    </>
  );
}
