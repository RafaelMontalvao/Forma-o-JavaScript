/*Elabore um algoritimo que calcule o que deve ser pago
por um produto, considerando o preço normal da etiqueta e a
escolha de pagamento.
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida
e efetuar o caluco adequado

código condição de pagamento:

- à vista débito, recebe 10% de desconto;
- à vista no dinheiro ou pix, recebe 15% de desconto;
- em duas vezes, preço normal da etiqueta sem juros;
- acima de duas vezes, preço normal da etiqueta mais juros de 10%;
*/


const precoEtiqueta = 100;
const condicaoPagamento = 4;

if(condicaoPagamento === 1){
    console.log('Total a pagar R$' ,precoEtiqueta -(precoEtiqueta* 0.1));
    }else if(condicaoPagamento === 2 ){
    console.log('Total a pagar R$' ,precoEtiqueta -(precoEtiqueta* 0.15));
    
}else if(condicaoPagamento ===3){
    console.log(' Total a pagar R$', precoEtiqueta);
}else{
    console.log(' Total a pagar R$', precoEtiqueta+(precoEtiqueta*0.1));
}