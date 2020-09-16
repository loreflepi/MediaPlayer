class Plugin{
    constructor(){
    }

    run(player){
        player.muted = true;
        player.play();
    }
}

export default Plugin;