let equipamentosDoCarro = {
    preco: 100000,
    calota: true,
    cor : 'Azul',
    aro: 16

}

function Carro(marca){
    this.marca = marca;
   
}

Carro.prototype = equipamentosDoCarro;

let fusca = new Carro ("VW");

console.log(equipamentosDoCarro.isPrototypeOf(fusca))