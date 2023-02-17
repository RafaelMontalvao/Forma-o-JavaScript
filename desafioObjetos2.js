/** Crie uma classe pessoas.
    Para cada pessoa  teremos os atrinutos nome, peso e altura.
    As pessoas dever ter a capacidade de dizer o valor do seu IMC(IMC=pes/(altura(altura)));
    Instancie uma pessoa chamada Jose que tenha 70 kg e 1,75 e altura e peça para ao jose para dizer o valor do seu IMC.

   */


    class Pessoa{
        nome;
        Pessoa;
        altura;

        constructor(nome, peso, altura){
            this.nome = nome;
            this.altura = altura
            this.peso = peso;
        }

        calcularImc(){
           return this.peso/(this.altura*this.altura)
        }

        classificarImc(){
            const imc = this.calcularImc();
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
        }
       
    
    const jose = new Pessoa("José", 70, 1.77);
    console.log(jose.classificarImc());
    const rafael = new Pessoa('Rafael', 77, 1.77)
    console.log(rafael.classificarImc());