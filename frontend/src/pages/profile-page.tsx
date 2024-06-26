import { Box } from "@chakra-ui/react";
import { Profile } from "../features/profile/components/profile";
import { DevelopedBy } from "../features/right-bar/components/developed-by";
import { SuggestionTab } from "../features/right-bar/components/suggestion-tab";
import { SideBar } from "../features/side-bar/side-bar";

export function ProfilePage() {
  return (
    <>
      <Box display="flex" justifyContent="center">
        <Box position="fixed" left="0">
          <SideBar />
        </Box>
        <Box position="absolute" left="250">
          <Profile />
        </Box>
        <Box position="absolute" left="850">
          <SuggestionTab />
          <DevelopedBy />
        </Box>
      </Box>
    </>
  );
}
