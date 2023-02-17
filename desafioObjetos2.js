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
       
    }
    const jose = new Pessoa("José", 70, 1.77);
    console.log(jose.calcularImc());
    const rafael = new Pessoa('Rafael', 77, 1.77)
    console.log(rafael.calcularImc());