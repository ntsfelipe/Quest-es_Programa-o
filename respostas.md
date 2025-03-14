# Questões objetivas
**1) Considerando a execução do código abaixo, indique a alternativa correta e justifique sua resposta.**
```javascript
console.log(x);
var x = 5;
console.log(y);
let y = 10;
```
**a) A saída será undefined seguido de erro**

b) A saída será 5 seguido de 10

c) A saída será undefined seguido de undefined

d) A saída será erro em ambas as linhas que utilizam console.log

**Resposta: A**

Justificativa: Por mais que "var" seja uma variável de escopo global, ela necessita um valor atribuído para ser exibido algo no console.log, porém, como não há nada sendo atribuido à variável x antes do "console.log(x)" o console retorna "undefinied".
O tipo de variável let não existe até que algo seja atribuído a ela, o que faz com que o "console.log(y)" retorne um erro, pois é como se não existisse essa variável.

**2) O seguinte código JavaScript tem um erro que impede sua execução correta. Analise e indique a opção que melhor corrige o problema. Justifique sua resposta.**

```javascript
function soma(a, b) {
    if (a || b === 0) {
        return "Erro: número inválido";
    }
    return a + b;
}
console.log(soma(2, 0));
```

a) Substituir if (a || b === 0) por if (a === 0 || b === 0)

**b) Substituir if (a || b === 0) por if (a === 0 && b === 0)**

c) Substituir if (a || b === 0) por if (a && b === 0)

d) Remover completamente a verificação if (a || b === 0)

**Resposta: B**

Justificativa: O simbolo de "||" representa "OR", ou seja, ou uma condição ou outra. Ademais, quando há algo dentro do if sem uma verificação, o if considera a verificar apenas se o item é "true". Dessa maneira, a verificação deve ser feita para ambas as condições, logo, o comando "if (a || b === 0)" está incorreto, pois apenas realiza a verificação do item b, o que faz com que qualquer número "a" somado a "b" retorne "Erro: número invalido" no console.

______
**3) Ao executar esse código, qual será a saída no console? Indique a alternativa correta e justifique sua resposta.**
```javascript
function calcularPreco(tipo) {
    let preco;

    switch(tipo) {
        case "eletrônico":
            preco = 1000;
        case "vestuário":
            preco = 200;
            break;
        case "alimento":
            preco = 50;
            break;
        default:
            preco = 0;
    }

    return preco;
}

console.log(calcularPreco("eletrônico"));
```

a) O código imprime 1000.

**b) O código imprime 200.**

c) O código imprime 50.

d) O código gera um erro.

**Resposta: B**

Justificativa: Não há um "break" após o "case: "eletrônico", o que faz com que o código só pare quando encontrar o primeiro "break", que está presente após a linha "preco = 200;", fazendo com que o "preco" do "eletrônico" seja correspondente à última alteração feita à variável "preco".
______
**4) Ao executar esse código, qual será a saída no console? Indique a alternativa correta e justifique sua resposta.**
```javascript
let numeros = [1, 2, 3, 4, 5];

let resultado = numeros.map(x => x * 2).filter(x => x > 5).reduce((a, b) => a + b, 0);

console.log(resultado);
```
a) 0

b) 6

c) 18

**d) 24**

**Resposta D**

Justificativa: Primeiro é determinado um array de números, após isso, é criada uma variável que armazena resultado de uma série de operações. O comando ".map" após numeros serve para percorrer cada item do array, e como x está sendo multiplicado por 2, multiplica por 2, resultando em [2, 4, 6, 8, 10]. O comando ".filter" filtra todos os números em uma determinada condição, nesse caso, x > 5, sobrando os números 6, 8 e 10. 
O comando ".reduce" soma os valores do array, resultando, nesse caso, em 6 + 8 + 10 que é igual a 24.
______
**5) Qual será o conteúdo do array lista após a execução do código? Indique a alternativa correta e justifique sua resposta.**

```javascript
let lista = ["banana", "maçã", "uva", "laranja"];
lista.splice(1, 2, "abacaxi", "manga");
console.log(lista);
```

a) ["banana", "maçã", "uva", "abacaxi", "manga", "laranja"]

b) ["banana", "abacaxi", "manga"]

**c) ["banana", "abacaxi", "manga", "laranja"]**

d) ["banana", "maçã", "uva", "abacaxi", "manga"]

**Resposta: C**

Justificativa: A contagem de listas dentro do javascript começa a partir do 0, ou seja, o primeiro item da lista representa o 0, o segundo 1, e assim por diante. Dessa maneira, quando o comando "(lista.splice(1, 2, "abacaxi", "manga"))" é executado, ele altura os valores do segundo e terceiro item para respectivamente "abacaxi" e "manga".
______
**6) Abaixo há duas afirmações sobre herança em JavaScript. Indique a alternativa correta e justifique sua resposta**

I. A herança é utilizada para compartilhar métodos e propriedades entre classes em JavaScript, permitindo que uma classe herde os métodos de outra sem a necessidade de repetir código.  
II. Em JavaScript, a herança é implementada através da palavra-chave `extends`.


**a) As duas afirmações são verdadeiras, e a segunda justifica a primeira.**

b) As duas afirmações são verdadeiras, mas a segunda não justifica a primeira.

c) A primeira afirmação é verdadeira, e a segunda é falsa.

d) A primeira afirmação é falsa, e a segunda é verdadeira.

**Resposta: A**

Justificativa: A afirmação II explica como é feita a herança de classes no javascript, utilizando a palavra-chave "extends", e a afirmação I explica o que é uma herança de classes, logo, a justificativa II só existe por que a I também existe.
______
**7) Dado o seguinte código. Indique a alternativa correta e justifique sua resposta.**

```javascript
class Pessoa {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }

  apresentar() {
    console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
  }
}

class Funcionario extends Pessoa {
  constructor(nome, idade, salario) {
    super(nome, idade);
    this.salario = salario;
  }

  apresentar() {
    super.apresentar();
    console.log(`Meu salário é R$ ${this.salario}.`);
  }
}
```


I) A classe Funcionario herda de Pessoa e pode acessar os atributos nome e idade diretamente.  
II) O método `apresentar()` da classe Funcionario sobrepõe o método `apresentar()` da classe Pessoa, mas chama o método da classe pai usando `super`.  
III) O código não funciona corretamente, pois Funcionario não pode herdar de Pessoa como uma classe, já que o JavaScript não suporta herança de classes.

Quais das seguintes afirmações são verdadeiras sobre o código acima?

**a) I e II são verdadeiras.**

b) I, II e III são verdadeiras.

c) Apenas II é verdadeira.

d) Apenas I é verdadeira.

**Resposta: A**

Justificativa: A classe Funcionário de fato é herdada da classe Pessoa e pode acessar seus atributos diretamente, logo, a afirmação I é verdadeira. Também, o metodo "apresentar()" da classe Funcionário de fato sobrepõe o método "apresentar()" da classe Pessoa assim como é verdade que o método da classe pai é chamada usando o "super", logo, a afirmação II está correta. Entretanto, na afirmação III há a afirmação errônea de que no javascript não há herança de classes, o que é incorreto.
______

**8) Analise as afirmações a seguir. Indique a alternativa correta e justifique sua resposta.**

**Asserção:** O conceito de polimorfismo em Programação Orientada a Objetos permite que objetos de diferentes tipos respondam à mesma mensagem de maneiras diferentes.  
**Razão:** Em JavaScript, o polimorfismo pode ser implementado utilizando o método de sobrecarga de métodos em uma classe.

a) A asserção é falsa e a razão é verdadeira.

**b) A asserção é verdadeira e a razão é falsa.**

c) A asserção é verdadeira e a razão é verdadeira, mas a razão não explica a asserção.

d) A asserção é verdadeira e a razão é verdadeira, e a razão explica a asserção.

**Resposta B**

Justificativa: A afirmação conceitual sobre poliformismo na Asserção está correta, pois a possibilidade de objetos de diferentes tipos responderem à mesma mensagem de maneira diferente é concreta. Entretanto, a Razão está incorreta pois no JavaScript não há a possibilidade de implementar o polimorfismo utilizando o método de sobrecarga de classes, pois, no JavaScript, o tipo de uma variável não é estritamente definido no momento de sua declaração.

______

# Questões dissertativas
9) O seguinte código deve retornar a soma do dobro dos números de um array, mas contém erros. Identifique os problema e corrija o código para que funcione corretamente. Adicione comentários ao código explicado sua solução para cada problema.

**Código Original do exercício:** 

```javascript
function somaArray(numeros) {

    for (i = 0; i < numeros.size; i++) {
        soma = 2*numeros[i];
    }
    return soma;
}
console.log(somaArray([1, 2, 3, 4]));
```

**Código corrigido:** 
```javascript
function somaArray(numeros) {
    var soma = 0; // A variável soma é declarada antes de precisar ser utilizada

    for (i = 0; i < numeros.length; i++) { // O comando ".size" não existe, o certo é ".length"
        soma += 2 * numeros[i]; // É necessário um "+" antes do simbolo de igual "=" pois para somar algo é necessário um operador de atribuição
    }
    return soma;
    
}
console.log(somaArray([1, 2, 3, 4]));
```
______
10) Crie um exemplo prático no qual você tenha duas classes:

- Uma classe `Produto` com atributos `nome` e `preco`, e um método `calcularDesconto()` que aplica um desconto fixo de 10% no preço do produto.
- Uma classe `Livro` que herda de `Produto` e modifica o método `calcularDesconto()`, aplicando um desconto de 20% no preço dos livros.

Explique como funciona a herança nesse contexto e como você implementaria a modificação do método na classe `Livro`.

Primeiramente, é criada a classe Produto, com os atributos "nome" e "preco" no constructor para iniciar as propriedades do objeto que será armazenado nessa classe. Após isso, são atribuidas, dentro do próprio constructor variáveis que armazenem essas propriedades. Logo em seguida é criada a função calcularDesconto(), que será responsável por calcular o desconto aplicado ao nosso produto. 
Criada essa função, há a possibilidade de criar um objeto novo como feito na linha 13 do código, com isso, basta chamar a função para que o preço com desconto seja calculado.
Com isso feito, podemos partir para a criação da nova classe "Livro" e herdar os métodos da classe Produto para ela. Ao inicializar a classe Livro, utilizamos o comando "extends" para herdar os elementos da classe pai. Dentro do constructor dessa classe, utilizando "super(nome, preco)" para puxar da classe Produto os atributos criados. Com os atributos já estabelecidos, para implementar uma modificação no método calcularDesconto() estabelecido na classe pai, resta criar novamente a função com o novo desconto substituindo o antigo no cálculo e no console.log();

```javascript
class Produto {
    constructor(nome, preco){
        this.nome = nome;
        this.preco = preco;
    };

        calcularDesconto() {
            this.desconto = this.preco - this.preco*0.1;
            console.log(`Seu produto é:  ${this.nome}\n Preço: R$${this.preco.toFixed(2)}\n Desconto: 10% \n Preço com desconto: R$${this.desconto.toFixed(2)}`);
        };
};

const banana = new Produto("Banana", 10);
banana.calcularDesconto();


class Livro extends Produto {
    constructor(nome, preco){
        super(nome, preco);
    };

    calcularDesconto() {
        this.desconto = this.preco - this.preco*0.2;
        console.log(`Seu livro é: ${this.nome}\n Preço: R$${this.preco.toFixed(2)}\n Desconto: 20% \n Preço com desconto: R$${this.desconto.toFixed(2)}`);
    } ;
};

const livro1 = new Livro("Harry Potter", 40);
livro1.calcularDesconto();
```


