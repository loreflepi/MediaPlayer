const video = document.getElementById("video");

class MediaPlayer{
    constructor(config){
        this.media = config.el;
    }

    playVideo(){
        if(this.media.paused){
            this.media.play();
        }
        else{
            this.media.pause();
        }

    }
}

let mediaplayer = new MediaPlayer({el : video});
function startVideo(){
    mediaplayer.playVideo();
}