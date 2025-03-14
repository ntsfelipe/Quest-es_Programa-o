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