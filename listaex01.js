/* Faça um algoritimo que dado as 3 notas tiradas por um aluno
em um semestre de faculdade, calcule e imprima a sua média e sua classificação conforme abaixo

Média = (nota1+nota2+nota3)/3;

Classificação 

Média menor que 5, Reprovação
Media entre 5 e 7, Recuperação
Media maior que 7, Aprovado

*/

const nota1 = 5;
const nota2 = 3;
const nota3 = 7;
const media = (nota1 + nota2 + nota3) / 3;

if(media<5){
    console.log(media, 'reprovado');
}
else if(media>= 5 && media<= 7 ){
    console.log(media, 'recuperaçao');
}
else{
    console.log(media, ' Aprovado');
}

