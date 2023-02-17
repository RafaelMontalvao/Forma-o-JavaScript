/* Crie uma classe para representar carros. 
Os carros possuem uma marca, uma cor e um gasto médio de combustivel po km rodado.
Crie um metodo que dado a quantidade de quilometros e o preço do combustivel nos de o valor 
gasto em reais para realizar o percurso.
*/

class Carros{

    marca;
    cor;
    gastoKmPorLitro;

    constructor(marca,cor,gastoKmPorLitro){
        this.marca=marca;
        this.cor=cor;
        this.gastoKmPorLitro=gastoKmPorLitro;

    }

    calcularGastoviagem(distanciaEmKm,precoCombustivel){
        return (distanciaEmKm*this.gastoKmPorLitro)*precoCombustivel;

    }
}

const fox = new Carros("Fox", "Branco", 1/12);
console.log(fox.calcularGastoviagem(70,5));