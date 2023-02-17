/*Faça um programa que calcule o valor de uma viagem

Você terá 3 variaveis, sendo elas:

Preço do combustivel.
Consumo médio do Veículo
Distancia da Viagem.

Imprima no console o vlaor que será gasto para realizar esta viagem

*/

const precoCombustivel = 5.79;
const consumoMedio = 10;
const distanciaViagem = 100;


let valorGastoViagem = (distanciaViagem/consumoMedio)*precoCombustivel;
console.log(valorGastoViagem.toFixed(2));