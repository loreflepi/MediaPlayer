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

    reproducir(){
        this.media.play();

    }

    pausar(){
        this.media.pause();
    }

    _initializePlugin(){
        let player = {
          play: () => this.playVideo(),
          media: this.media,
          get muted(){
              return this.media.muted;
          },
          set muted(value){
              this.media.muted = value;
          },
          reproducir: this.reproducir,
          pausar: this.pausar
        }

        this.plugins.forEach(iterator =>{
           iterator.run(player);
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