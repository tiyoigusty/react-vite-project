import { Box } from "@chakra-ui/react";
import { DevelopedBy } from "../features/right-bar/components/developed-by";
import { MyProfile } from "../features/right-bar/components/my-profile";
import { SuggestionTab } from "../features/right-bar/components/suggestion-tab";
import { SideBar } from "../features/side-bar/side-bar";
import { Search } from "../features/search/components/search";

export function SearchPage() {
  return (
    <>
      <Box display="flex" justifyContent="center">
        <Box position="fixed" left="0">
          <SideBar />
        </Box>
        <Box position="absolute" left="250">
          <Search />
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
