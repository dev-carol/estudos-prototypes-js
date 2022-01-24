function Carro(marca, preco, cor, rodas){
    this.marca = marca;
    this.preco = preco;
    this.calota = true;
    this.cor = cor;
    this.rodas = rodas;
}



let fusca = new Carro ("VW", 10000, 'Cinza', 4);

for(prop in fusca){
    console.log(prop + ' =>  ' +  fusca[prop]);
}



