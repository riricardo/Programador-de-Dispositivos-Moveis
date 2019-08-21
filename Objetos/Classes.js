// POO - Programação Orientada a Objetos
// Polimorfismo
// Herança
// Encapsulamento

// Classe tem o nome de Pessoa
class Pessoa{

    /* O construtor é o primeiro método a ser chamado
     * O construtor pose receber parametros ou não
     * Quando um parametro é omitido é possível definir
     * um valor por padrão (idade=1)
     */
    
    constructor(nomePessoa, idade, sexo, dataNascimento, cpf){
        this.nome = nomePessoa;
        // Que utilizamos o OU (||) para verificar se o parametro
        // eh nulo se for atriuirmos outro valor para a mesma
        this.idade = idade || "Não definida";
        this.sexo = sexo;
        this.dataNascimento = dataNascimento;
        this.cpf = cpf;
        this.endereco = endereco;
    }

    // Metodo nao estatico que possui retorno
    validarCpf() {
        if(this.cpf.lenght === 11) {
            return true;
        }
        return false;
    }

    static validarCPFEstatico(cpf) {
        if(cpf.lenght === 11) {
            return true;
        }
        return false;
    }

    // Metodo nao estatico que nao possui retorno
    validarEndereco() {
        console.log(this.endereco);
    }

}

// Toda vez que eu preciso instanciar
// Preciso utilizar a palavra new
// const pessoa1 = new Pessoa("Rickzy",24,"M","22/04/1995");
// const pessoa2 = new Pessoa("Vinicius");
// const pessoa3 = new Pessoa("Mirela");
// console.log(pessoa1, pessoa2, pessoa3)

const endereco = {
    rua: 21
}

const pessoa1 = new Pessoa("Serumaninho",8,"Dog",null,'444',endereco)

// Todo metodo nao estatico precisa ser instanciado
console.log(pessoa1.validarCpf())
pessoa1.validarEndereco();
console.log(Pessoa.validarCPFEstatico(444))