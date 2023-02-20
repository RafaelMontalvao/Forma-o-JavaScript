/*Faça um programa que receve a media  de um aluno.
caso a media seja < 5 imprima reprovado
caso a media seja >= 5 e <7 imprima "recuperação"
caso a media seja >=7 imprima "Aprovado"
*/
const {gets,print} = require('./fucoesauxiliares.js')

const media = gets();

if(media >=0 && media < 5){
    print('reprovado');
}
else if(media>= 5 && media<7){
    print('recuperação');
}
else if( media >= 7){
    print('APROVADO!!!!!')
}else{
    print('Numero invalido')
}