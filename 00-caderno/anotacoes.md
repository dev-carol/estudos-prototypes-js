## A propriedade prototype

- As funções além de suas propriedades que já vimos, também vem coma propriedade prototype criada;
- Recebemos um objeto vazio, que pode ter propriedades e métodos adicionados

```jsx
function test()
 {return true};

console.log(test.prototype);
console.log(typeof test.prototype);
```

---

## Adicionando props e métodos com prototype

- Vejamos agora como podemos adicionar prorpeidades e métodos;
- Perceba que nãp há diferença em acessá-las;

```jsx
function Pessoa (nome,idade){

	this.nome = nome;
  this.idade = idade;

}

Pessoa.prototype.profissao = 'Estudante';
Pessoa.prototype.falar = function(){
	console.log('Olá mundo!");
}

let joao = new Pessoa("João", 15);
joao.falar();
console.log(joao.profissao);
```

---

## Adicionando múltiplas props e métodos

- Não precisamos adicionar uma a uma as propriedades ou métodos;

```jsx
function Pessoa(nome,idade){
	this.nome = nome;
	this.idade = idade;

}

Pessoa.prototype = {
profissao:  'Estudante',
	falar(){
		console.log("João", 15);
 }

}

let joao = new Pessoa ("João". 15);

joao.falar();
console.log(joao.profissao);
```

---

## Modificação do prototype

- Ao alterar o prototype, todas as instâncias ganham seus novos métodos ou propriedades;

```jsx
let joão = new Pessoa ("João", 15);

Pessoa.prototype.gritar = function(){
	console.log("AAAAAAAH")
}

joao.gritar();
```

---

## Proprs do Obj x props do Prototype

- A ordem de acesso é: primeiro o objeto e depois o prototype;
- As propriedaes  podem coexistir;

```jsx
function Pessoa(nome,idade){
	this.nome = nome;
  this.idade = idade;

}

Pessoa.prototype.idade = 10;
Pessoa.prototype.cabbelo = 'Castanho';

let pedro = new Pessoa ("Pedro",15);

console.log(pedro.idade);
console.log(pedro.cabelo);

pedro.cabelo = 'louro';

console.log(pedro.cabelo);
```

---

## Maneira de utilizar o prototype se já tem prop

- Podemos deletar uma propriedade, e voltar a utilizar o prototype;
- Pois mesmo sendo sobrescrito, ainda estará disponível

```jsx
function Pessoa (name){
 this.name = name;

}

Pessoa.prototype.name = 'Estava sobrescrito';

let pessoa = new Pessoa ('teste');

console.log(pessoa.name)

delete pessoa.name;

console.log(pessoa.name);
```

---

## Verificando propriedade do prototype

- Da mesma forma que o objeto tem método de verificar propriedades ;
- Os prototypes tem também;

```jsx
function Pessoa(name){
	this.name = name
}

Pessoa.prototype.name = "estava sobrescrito";

let pessoa = new Pessoa('teste');

console.log(pessoa.hasOwnProperty('name'));
console.log(pessoa.constructor.prototype.hasOwnProperty('name'));
```

---

## Distinguir se é prop do obj ou do prototype

- E é claro que utilizando o método hasOwnProperty, conseugimos saber se a propriedade é do objeto ou do prototype;

```jsx
function Pessoa(name, lastName,age){
	this.name = name;
	this.lastName = lastName;
	this.age = age;

}

Pessoa.prototype.job = 'desenvolvedor';

let p = new Pessoa("João", "Silva", 26);

console.log(p.hasOwnProperty("job"));
console.log(p.cosntructor.prototype.hasOwnProperty("job"));
```

---

## Como fazer loop para objetos

- Obs: um pouco off topic de prototype;
- O loop mais indicado para percorrer objets é o for ...in;
- Isso porque o for normal serve mais para arrays;

```jsx
function Pessoa(name, lastName,age){
	this.name = name;
	this.lastName = lastName;
	this.age = age;

}

pessoa = new Pessoa('Mateus', 'Battisti', 29);

for(prop in pessoa){
	console.log(prop + " -> " + pessoa[prop];

}
```

---

## Checar se é prototype de algum objeto

- Com o método isPrototypeOf, conseguimos checar se um objeto é prototype de outro

```jsx
let caracteristicas = {
 maos: 2,
 pes: 2,
 pernas: 2

}

funciton Humano(name){
 this.name = name
}

Humnano.prototype = caracteristicas;

let joao = new Humano("João");

console.log(caracteristicas.isPrototypeOf(joao));
```

---

## Melhorando os objetos do JavaScript

- Podemos criar novos métodos e propriedades para os objtos do JS existentes

```jsx
Array.prototype.checkLength = function(){
	 return this.length;

}

let a = [1,2.3];

console.log(Array.checkLength());
```

## Por que não é uma boa ideia

- Futuramente pode vir um método com o mesmo nome na linguagem;
- Desenvolvedores podem desconhecer o método, não sabendo de onde ele vem, gerando confusão;
- Para minimizar os problemas, faça uma checagem antes;

```jsx
if(typeOf Array.prototype.checklength != 'function'){
	Array.prototype.checkLengh = function(){
 return this.length;

}
}
```