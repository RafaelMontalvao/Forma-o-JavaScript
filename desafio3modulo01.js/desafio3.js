/* Faça um programa que calcule e imprima um salario a ser transferido para um funcionario
para Realizar o calculo receba o valor bruto  do salario e o adicional dos beneficios
O salario a ser transferido é calculado da seguinte maneira:

valor bruto do Sálario - percentual de imposto mediante a faixa salarial + adicional dos beneficios.


para calcular o percentual de impo segue as aliquotas:

De R$ 0.00 a R$ 1100.00 = 5.00%
De R$ 1100.01 a R$ 2500.00 = 10.00%
Maior que R$ 2500.00 = 15.00%

        Exemplo:
            Entrada:
                2000
                250

            Saida
            2050.00

*/
const{gets,print}= require ('./funcoesauxiliares.js')
const salario = gets();
const beneficios = gets();
let aliquotas = 0;

    if (salario ===0 && salario<=1100.00){
        aliquotas = salario * 0.05
    }else if(salario >=1100.01 && salario <=2500.00){
        aliquotas = salario * 0.1
    }else{
        aliquotas = salario * 0.15
    }

salarioTotal = (salario- aliquotas)+beneficios;
print(salarioTotal);