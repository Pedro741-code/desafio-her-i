var ataque = ""
class heroi {
    constructor (name,idade,tipo){
    this.name = name
    this.idade = idade 
    this.tipo = tipo 
    
    
if (this.tipo==="mago"){
    ataque = "usou magia"
}else if (this.tipo==="guerreiro"){
    ataque= "usou espada"
}else if (this.tipo==="monge"){
    ataque = "usou artes marciais"
}else if (this.tipo ==="ninja"){
    ataque= "usou shuriken"
}
    }
    atacar(){
        console.log(`O ${this.tipo} atacou usando um ${ataque}`)
    }

}
let saida = new heroi ("Pedro", 19, "mago")
saida.atacar()