/* Faça um programa que receba N(quntidade de numeros) e seus respectivos valores.
imprima o maior numero par e o menos numero impar.
Exemplo:
Entrada;
5
3
4
1
10
8
Saida: 
maior numero par: 10
menor numero impar :1 
*/

const{gets,print}= require ('./funcoesauxiliares.js')

const n = gets();
let numeroPar = 0
let numeroImpar= 1;
for (i=0; i<n; i++){
    const numero = gets()
    if (numero %2=== 0){
         if (numero>numeroPar ){

         numeroPar = numero;
        
    }
}else {
    if(numero<numeroImpar){
        numeroImpar=numero;
    }
 }
}
print(numeroImpar);
print(numeroPar);
