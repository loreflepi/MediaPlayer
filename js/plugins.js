class Plugin{
    constructor(){
    }

    run(player){
        player.mute();
        player.playVideo();
    }
}

export default Plugin;