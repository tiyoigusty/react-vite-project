import { Box } from "@chakra-ui/react";
import { DevelopedBy } from "../features/right-bar/developed-by";
import { MyProfile } from "../features/right-bar/my-profile";
import { SuggestionTab } from "../features/right-bar/suggestion-tab";
import { SideBar } from "../features/side-bar/side-bar";
import { Home } from "../features/home/components/home";

export function HomePage() {
  return (
    <>
      <Box display="flex" justifyContent="center">
        <Box position="fixed" left="0">
          <SideBar />
        </Box>
        <Box position="absolute" left="250">
          <Home />
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
