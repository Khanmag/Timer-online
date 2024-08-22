import audio1 from "../../music/m1.mp3";
import audio2 from "../../music/m2.mp3";
import audio3 from "../../music/opm.mp3";
import signal1 from "../../music/s1.mp3";
import signal2 from "../../music/s2.mp3";
import signal3 from "../../music/s3.mp3";
import signal4 from "../../music/s4.mp3";
import bg1 from "../../assets/backgrounds/bg1.jpg";
import bg2 from "../../assets/backgrounds/bg2.jpg";
import bg3 from "../../assets/backgrounds/bg3.jpg";
import bg4 from "../../assets/backgrounds/bg4.jpg";

const musicOptions = [
  {
    id: "1",
    title: "music1",
    src: audio1,
  },
  {
    id: "2",
    title: "music2",
    src: audio2,
  },
  {
    id: "3",
    title: "music3",
    src: audio3,
  },
];
const signalOptions = [
  {
    id: "1",
    title: "signal1",
    src: signal1,
  },
  {
    id: "2",
    title: "signal2",
    src: signal2,
  },
  {
    id: "3",
    title: "signal3",
    src: signal3,
  },
  {
    id: "4",
    title: "signal4",
    src: signal4,
  },
];
const backgroundOptions = [
  {
    id: "1",
    title: "bg1",
    src: bg1,
  },
  {
    id: "2",
    title: "bg2",
    src: bg2,
  },
  {
    id: "3",
    title: "bg3",
    src: bg3,
  },
  {
    id: "4",
    title: "bg4",
    src: bg4,
  },
];
const themes = [
  {
    id: 1,
    color: "blue",
  },
  {
    id: 2,
    color: "purple",
  },
  {
    id: 3,
    color: "green",
  },
];
export { musicOptions, signalOptions, backgroundOptions, themes };
