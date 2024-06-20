import { createSlice } from "@reduxjs/toolkit";

interface Thread {
  photoProfile: string;
  fullName: string;
  username: string;
  content: string;
  image: string
}

export interface ThreadState {
  thread: Thread;
}

const initialState: ThreadState = {
  thread: {
    photoProfile: "",
    fullName: "",
    username: "",
    content: "",
    image: "",
  },
};

export const threadSlice = createSlice({
  name: "thread",
  initialState,
  reducers: {
    SET_THREAD: (state, action: { payload: Thread }) => {
      state.thread = action.payload;
    },
  },
});

export const { SET_THREAD } = threadSlice.actions;

export default threadSlice.reducer
