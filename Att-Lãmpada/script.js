class Lampada{
 
    constructor(){
        this.div = document.getElementById("lampada")
        this.estado = true
    }
 
    trocar(){
 
        if(this.estado){
            this.div.classList.remove("ligada")
            this.div.classList.add("desligada")
            this.estado = false
        }else{
            this.div.classList.remove("desligada")
            this.div.classList.add("ligada")
            this.estado = true
        }
 
    }
 
}
 
const lampada = new Lampada()