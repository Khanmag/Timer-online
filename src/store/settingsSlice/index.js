import { createSlice } from "@reduxjs/toolkit";
import { musicOptions } from "./utils";

const initialState = {
  audioRef: null,
  currentMusic: musicOptions[0],
  currentSignal: null,
  currentBackground: null,
  theme: "light",
};

const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    setAudioRef(state, { payload: newRef }) {
      state.audioRef = newRef;
    },
    setCurrentMusic(state, { payload: id }) {
      const newMusic = musicOptions.find((item) => item.id === id);
      if (newMusic) state.currentMusic = newMusic;
    },
    // playAudio(state) {
    //   if (state.audioRef) state.audioRef.current.play();
    // },
    // pauseAudio(state) {
    //   if (state.audioRef) state.audioRef.current.pause();
    // },
  },
});

export default settingsSlice.reducer;

export const {
  setAudioRef,
  // playAudio,
  // pauseAudio,
  setCurrentMusic,
} = settingsSlice.actions;
