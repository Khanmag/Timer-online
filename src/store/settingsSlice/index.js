import { createSlice } from "@reduxjs/toolkit";
import {
  backgroundOptions,
  musicOptions,
  signalOptions,
  themes,
} from "./utils";

const initialState = {
  audioRef: null,
  signalRef: null,
  currentMusic: musicOptions[0],
  currentSignal: signalOptions[0],
  isOnBG: true,
  currentBG: backgroundOptions[0],
  theme: themes[0],
};

const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    setAudioRef(state, { payload: newRef }) {
      state.audioRef = newRef;
    },
    setSignalRef(state, { payload: newRef }) {
      state.signalRef = newRef;
    },
    setCurrentMusic(state, { payload: id }) {
      const newMusic = musicOptions.find((item) => item.id === id);
      if (newMusic) state.currentMusic = newMusic;
    },
    setCurrentSignal(state, { payload: id }) {
      const newSignal = signalOptions.find((item) => item.id === id);
      if (newSignal) state.currentSignal = newSignal;
    },
    setCurrentBG(state, { payload: id }) {
      const newBG = backgroundOptions.find((item) => item.id === id);
      if (newBG) state.currentBG = newBG;
    },
    setIsOnBG(state, { payload: v }) {
      state.isOnBG = v;
    },
    setTheme(state, { payload: id }) {
      const newTheme = themes.find((item) => item.id === id);
      console.log(newTheme);
      if (newTheme) state.theme = newTheme;
    },
  },
});

export default settingsSlice.reducer;

export const {
  setAudioRef,
  setSignalRef,
  setCurrentMusic,
  setCurrentSignal,
  setCurrentBG,
  setIsOnBG,
  setTheme,
} = settingsSlice.actions;
