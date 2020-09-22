import MediaPlayer from "./generalPlayer.js";
import Plugin from "./plugins.js";
import VideoController from "./videoController.js";

const video = document.getElementById("video");
const buttonPlay = document.getElementById("buttonPlay");
const buttonMute = document.getElementById("buttonMute");
const buttonUnMute = document.getElementById("buttonUnMute");

let mediaplayer = new MediaPlayer({el : video, plugins: [new Plugin(), new VideoController()]});

buttonPlay.onclick = () => {
    mediaplayer.playVideo();

}

buttonMute.onclick = () => {
    mediaplayer.mute();

}

buttonUnMute.onclick = () => {
    mediaplayer.unMute();

}