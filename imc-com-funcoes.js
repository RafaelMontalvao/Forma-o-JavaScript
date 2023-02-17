function calcularImc(peso,altura){
    return peso / Math.pow(altura,2);    
}

function classificarImc(imc){
    if(imc < 18.5){
        return('!!!! ABAIXO DO PESO !!!!');
    }
    else if(imc>=18.5 && imc<25){
        return ('Parabéns voce esta com o peso normal.');
    }else if(imc>=25 && imc<30){
        return ('Acima do Peso.');
    }else if(imc>=30 && imc<40){
        return ('!! OBESO !!');
    }else{
        return('!!!!!! OBESIDADE GRAVE !!!!!!');
    }
}
(function (){
const peso = 150;
const altura = 1.77;
const imc = calcularImc(peso,altura);
console.log('IMC:',imc.toFixed(2), '-' , classificarImc(imc));
})();


