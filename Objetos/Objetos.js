// Objetos
// Objeto Literal, é um JSON estático (Java Script Object Notation)
const Ricardo = {
    nome: "Ricardo Cardona",
    idade: 24,
    sexo: "M",
    endereco: {
        rua: "",
        cep: "",
        cidade: "",
        telefone: [{
            id: 1,
            numero: 999
        },
        {
            id: 2,
            numero: 555
        }]
    }
}

console.log(Ricardo)
//console.log(Ricardo.endereco)


// Objeto sendo criado da maneira antiga

const carro1 = new Object();
carro1.anoFabricacao = 2019;
carro1.cor = "Branco";
carro1.modelo = "Mustang";

console.log(carro1)

const carro2 = Object.assign({combustivel: "flex"},carro1);

console.log(carro2)

// Desestruturação

const {nome, idade, endereco} = Ricardo;

console.log(nome, idade, endereco);