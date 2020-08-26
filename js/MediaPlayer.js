class MediaPlayer{
    constructor(config){
        this.media = config.el;
        this.plugins = config.plugins || [];
        this._initializePlugin();
    }

    playVideo(){
        if(this.media.paused){
            this.media.play();
        }
        else{
            this.media.pause();
        }

    }

    _initializePlugin(){
        this.plugins.forEach(iterator =>{
           iterator.run(this);
        });
    }

    mute(){
        this.media.muted = true;
    }

    unMute(){
        this.media.muted = false;
    }
}

export default MediaPlayer;