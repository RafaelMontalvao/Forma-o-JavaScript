/* O IMC - indice de Massa corporal é um critério da Organização
Mundial de saúde para dar uma indicação sobre a condição de peso de uma pessoa adulta.

Formula IMC:
IMC = peso / (altura * altura)

Elabore um algoritimo que dado o peso e a altura de um adulto mostre sua 
condição de acordo com a tabela abaixo.

IMC em adultos condição:
- Abaixo de 18.5, Abaixo do Peso;
- Entre 18.5 e 25 , Peso normal;
- Entre 25 e 30, Acima do Peso;
- Entre 30 e 40, Obeso;
- Acima de 40, Obesidade Grave.
*/

const peso = 150;
const altura = 1.77;
const imc= peso / Math.pow(altura,2);

if(imc < 18.5){
    console.log('IMC = ' ,imc.toFixed(2), '!!!! ABAIXO DO PESO !!!!');
}
else if(imc>=18.5 && imc<25){
    console.log('IMC= ',imc.toFixed(2), 'Parabéns voce esta com o peso normal.');
}else if(imc>=25 && imc<30){
    console.log('IMC= ',imc.toFixed(2), 'Acima do Peso.');
}else if(imc>=30 && imc<40){
    console.log('IMC= ',imc.toFixed(2), '!! OBESO !!');
}else{
    console.log('IMC= ',imc.toFixed(2), '!!!!!! OBESIDADE GRAVE !!!!!!');
}