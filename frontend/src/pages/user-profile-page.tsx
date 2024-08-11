import { Box } from "@chakra-ui/react";
import { DevelopedBy } from "../features/right-bar/components/developed-by";
import { SuggestionTab } from "../features/right-bar/components/suggestion/suggestion-tab";
import { SideBar } from "../features/side-bar/side-bar";
import { UserProfile } from "../features/profile/components/user-profile";
import { MyProfile } from "../features/right-bar/components/my-profile copy";

export function UserProfilePage() {
  return (
    <>
      <Box display="flex" justifyContent="center">
        <Box position="fixed" left="0">
          <SideBar />
        </Box>
        <Box position="absolute" left="250">
          <UserProfile />
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
