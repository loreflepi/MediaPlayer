
class VideoController{
    constructor(){
        this.limite = 0.25;
        this.manejoControlador = this.manejoControlador.bind(this);
        this.manejoVisionCambio = this.manejoVisionCambio.bind(this);
    }

    run(player){
        this.player = player;
        let controlador = new IntersectionObserver(this.manejoControlador,{
            threshold: this.limite
        });
        controlador.observe(this.player.media);
        document.addEventListener("visibilitychange", this.manejoVisionCambio);
    }

    manejoControlador(entries){
        if (entries[0].intersectionRatio > this.limite){
            this.player.reproducir();
        }
        else{
            this.player.pausar();
        }
    }

    manejoVisionCambio(){
        const esVisible = document.visibilityState === "visible";
        if (esVisible){
            this.player.reproducir();
        }
        else{
            this.player.pausar();
        }
    }
}

export default VideoController;