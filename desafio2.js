/*Faça um programa que calcule o valor de uma viagem

Você terá 5 variaveis, sendo elas:

preço etanol
Preço do gasolia.
Consumo médio do Veículo
Distancia da Viagem.
tipo de combustivel


Imprima no console o vlaor que será gasto para realizar esta viagem

*/

const precoEtanol = 5.79
const precoGasolina = 6.66;
const consumoMedio = 10;
const distanciaViagem = 100;
let tipoDeCombustivel = 'gasolina'

if ( tipoDeCombustivel === 'gasolina'){
var valorGastoViagem = (distanciaViagem/consumoMedio)*precoGasolina;
console.log(valorGastoViagem.toFixed(2));}
else{
    var valorGastoViagem = (distanciaViagem/consumoMedio)*precoEtanol;
console.log(valorGastoViagem.toFixed(2));}
