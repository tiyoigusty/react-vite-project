import { Box } from "@chakra-ui/react";
import { LeftBar } from "../components/left-bar";
import { Post } from "../components/post";
import { RightBar } from "../components/right-bar";
import { Thread } from "../components/thread";

export function HomePage() {
  return (
    <>
        <Box display="flex" justifyContent="center">
          <Box>
            <LeftBar />
          </Box>
          <Box borderRight="1px solid grey" borderLeft="1px solid grey">
            <Post />
            <Thread
              profpic="https://images.pexels.com/photos/1097456/pexels-photo-1097456.jpeg?auto=compress&cs=tinysrgb&w=600"
              name="Tiyo Igusty"
              username="@tiyooIgustyy"
              time={3}
              quote="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem, vel."
              like={678}
              reply={3985}
            />
            <Thread
              profpic="https://images.pexels.com/photos/18581955/pexels-photo-18581955/free-photo-of-man-between-skyscrapers.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              name="Agik Gigih"
              username="@agikgigih98"
              time={1}
              quote="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem, vel."
              image="https://images.pexels.com/photos/2611686/pexels-photo-2611686.jpeg?auto=compress&cs=tinysrgb&w=600"
              like={1000}
              reply={5473}
            />
            <Thread
              profpic="https://images.pexels.com/photos/1097456/pexels-photo-1097456.jpeg?auto=compress&cs=tinysrgb&w=600"
              name="Tiyo Igusty"
              username="@tiyooIgustyy"
              time={3}
              quote="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem, vel."
              like={345}
              reply={353}
            />
          </Box>
          <Box>
            <RightBar />
          </Box>
        </Box>
    </>
  );
}
