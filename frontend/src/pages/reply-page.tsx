import { Box } from "@chakra-ui/react";
import { Reply } from "../features/reply/component/reply";
import { DevelopedBy } from "../features/right-bar/components/developed-by";
import { MyProfile } from "../features/right-bar/components/my-profile copy";
import { SuggestionTab } from "../features/right-bar/components/suggestion/suggestion-tab";
import { SideBar } from "../features/side-bar/side-bar";

export function ReplyPage() {
  return (
    <>
      <Box display="flex" justifyContent="center">
        <Box position="fixed" left="0">
          <SideBar />
        </Box>
        <Box position="absolute" left="250">
          <Reply />
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
