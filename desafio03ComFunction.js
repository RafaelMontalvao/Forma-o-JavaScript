const precoEtiqueta = 100;
const condicaoPagamento =2;

function aplicarDesconto(valor,desconto){
    return (valor - (valor* (desconto/100)));
}
function aplicarJuros(valor,juros){
    return(valor +((valor* juros/100)));
}

if(condicaoPagamento === 1){
    console.log('Total a pagar R$' ,aplicarDesconto(precoEtiqueta,10));
    }else if(condicaoPagamento === 2 ){
    console.log('Total a pagar R$' ,aplicarDesconto(precoEtiqueta,15));
    
}else if(condicaoPagamento ===3){
    console.log(' Total a pagar R$', precoEtiqueta);
}else{
    console.log(' Total a pagar R$', aplicarJuros(precoEtiqueta,10));
}