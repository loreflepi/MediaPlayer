import MediaPlayer from "./MediaPlayer.js";
import Plugin from "./plugins.js";

const video = document.getElementById("video");
const buttonPlay = document.getElementById("buttonPlay");
const buttonMute = document.getElementById("buttonMute");
const buttonUnMute = document.getElementById("buttonUnMute");

let mediaplayer = new MediaPlayer({el : video, plugins: [new Plugin()]});

buttonPlay.onclick = () => {
    mediaplayer.playVideo();

}

buttonMute.onclick = () => {
    mediaplayer.mute();

}

buttonUnMute.onclick = () => {
    mediaplayer.unMute();

}