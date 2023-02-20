// crie um programa que seja capaz de percorrer uma lista de 
//numeros e imprima cada numero para encontrado.


numeros= [1,2,3,4,5,6,7,8,9,10];

for (let i = 0; i < numeros.length; i++) {
    if(numeros[i]%2===0){
        console.log(numeros[i]);
    }
    
}