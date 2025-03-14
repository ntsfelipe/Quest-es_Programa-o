function somaArray(numeros) {
    var soma = 0; // A variável soma é declarada antes de precisar ser utilizada

    for (i = 0; i < numeros.length; i++) { // O comando ".size" não existe, o certo é ".length"
        soma += 2 * numeros[i]; // É necessário um "+" antes do simbolo de igual "=" pois para somar algo é necessário um operador de atribuição
    }
    return soma;
    
}
console.log(somaArray([1, 2, 3, 4]));