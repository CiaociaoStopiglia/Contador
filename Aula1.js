const post = { titulo: "Introdução JS"};
const copiaPost = post;

copiaPost.titulo = "Aprendendo React";

console.log(post.titulo);

//------------//

const nome = "João Stopiglia";
const curso = {
    NomeDoCurso: "Desenvolvimento de sistemas", 
    duracao: "12 meses"
}

curso.NomeDoCurso = "Mecanica"

console.log(`Olá, ${nome}, bem vindo ao curso ${curso.NomeDoCurso}`)

//------------//

function soma (a,b) {
    return a + b;
}
let a = 1;
let b = 2;

console.log(soma(a, b));

//------------//

const PI = 3.14
PI = 3.1415; // ERROR! nao pode mudar o const

//------------//

let cor = "azul";

function pintar(){
    let cor = "Vermelho";
    console.log("Dentro da função", cor)
}

pintar();
console.log(("Fora da Função", cor));