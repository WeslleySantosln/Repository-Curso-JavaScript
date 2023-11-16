//  ----------------------------- Aula 01 -----------------------  \\
console.log("");
console.log("//  ---------------- Aula 01 -----------------------  ");

let arr = ["João","Maria",18, true];

console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);

console.log("");

arr.forEach(element => {
    console.log(element);
});

console.log();

for(let i = 0 ; i <= arr.length ; i++){
    console.log(arr[i]);

};

console.log();


arr.map(cadaValor => {
    console.log(cadaValor);
});





//  ----------------------------- Aula 02 ------------------------  \\
console.log("");
console.log("//  ---------------- Aula 02 -----------------------  ");


let carro = {
    aro: 29,
    cor: "vermelho",
    vidrosETravas: "Eletrico",
    valor: 10.00,
    testeDriver: function(chaveDeAcesso){
        let motor = false;
        if(chaveDeAcesso == (1533)){
            motor = true;
        };

        if(motor == true ){
            console.log("Motor ligado");
        }else{
            chave = prompt("Chave de acesso invalida, digite novamente!");
            carro.testeDriver(chave);
        }
    }
};

let carroPremium = {
    tetoSolar: true,
    banco: "couro",
    valor: carro.valor * 3

};



console.log("------- Carro normal: --------");
console.log("Carro normal cor: " + carro.cor);
console.log("Carro normal aro: " + carro.aro);
console.log("Carro normal vidros: " + carro.vidrosETravas);
console.log("Carro normal valor: R$" + carro.valor);
carro.testeDriver(1533);

carro.tetoSolar = false;

console.log("Teto solar: " + carro.tetoSolar);





console.log("");
console.log("------- Carro premium: --------");

let carroPremiumB = {};


Object.assign(carroPremiumB, carro);
Object.assign(carroPremiumB, carroPremium);


console.log(carroPremiumB);
console.log(Object.keys(carroPremiumB));



//  ----------------------------- Aula 03 ------------------------  \\
console.log("");
console.log("//  ---------------- Aula 03-----------------------  ");

let filaDoPao = ["one", "twe" , "tre" , "four" , "five","tre","five" ];


filaDoPao.forEach(fila => {
    console.log(fila);   
});


//fila andou
filaDoPao.shift(); //remove o primeiro
console.log();
console.log("//fila andou");



filaDoPao.forEach(fila => {
    console.log(fila);   
});


//chegou cliente
filaDoPao.push("six"); //acrescenta no final
console.log();
console.log("//chegou cliente");



filaDoPao.forEach(fila => {
    console.log(fila); 
});


//Fila andou
filaDoPao.shift();
console.log();
console.log("//Fila andou");

filaDoPao.forEach(fila => {
    console.log(fila); 
});



filaDoPao.unshift("twe"); //acrescenta no começo
console.log();
console.log("//Cliente voltou porque o troco tava errado");

filaDoPao.forEach(fila => {
    console.log(fila); 
});




filaDoPao.pop(); //remove do final
console.log();
console.log("//Ultimo cliente desistiu porque a fila tava demorando para andar");

filaDoPao.forEach(fila => {
    console.log(fila); 
});

//Fila andou
filaDoPao.shift();
console.log();
console.log("//Fila andou");

filaDoPao.forEach(fila => {
    console.log(fila); 
});


//Retorna a posição do valor procurado
console.log();
console.log("//Retornar a posição do valor procurado");

console.log(filaDoPao.indexOf("five")); //Retorna o primeiro
console.log(filaDoPao.lastIndexOf("four")); //Retorna o ultimo
console.log(filaDoPao.lastIndexOf("five")); //Retorna o ultimo


//Retornar um array apartir de outro array determinado por parâmentros
console.log();
console.log("//Retornar um array apartir de outro array determinado por parâmentros");

console.log(filaDoPao.slice(2,4)); 
console.log(filaDoPao.slice(2)); //Quando não há o segundo parâmentro o array seguirá até o fim
console.log(filaDoPao.slice(-2,)); //Começando de trás para frente(Contando os dois ultimos)
console.log(filaDoPao.slice(1, -2,)); //Retirando os 2 ultimos elementos do array

//Checando se o valor pertece ao array
console.log();
console.log("//Checando se o valor pertece ao array");

console.log(filaDoPao.includes("four"));
console.log(filaDoPao.includes("six"));

//inverte as posições do array
console.log();
console.log("//inverte as posições do array");

console.log(filaDoPao.reverse());



//  ----------------------------- Aula 04 ------------------------  \\
console.log("");
console.log("//  ---------------- Aula 04-----------------------  ");
console.log("");



let nome = "         Matheus";

let nomeCorrigido = nome.trim(); //Remove tudo que não é String

console.log("Olá, " + nome + " Seja bem vindo!");
console.log("Olá, " + nomeCorrigido + " Seja bem vindo!");


//  ----------------------------- Aula 05 ------------------------  \\
console.log("");
console.log("//  ---------------- Aula 05-----------------------  ");
console.log("");

let idDoUsuario = "35";

let idBD = idDoUsuario.padStart(6,"0"); //Acrescenta dados a String para atingir o numero de caracteres estabelecido

console.log(idDoUsuario);
console.log(idBD);


//  ----------------------------- Aula 05 ------------------------  \\
console.log("");
console.log("//  ---------------- Aula 05-----------------------  ");
console.log("");

let frase = "Testando o método split";

console.log(frase.split(" ")); //Divide o texto e converte em array, determinado pelo separado.

let produtos = "banana;maçã;pera;uva;manga;abacaxi";

let produto = produtos.split(";");

console.log(produto);

//  ----------------------------- Aula 05 ------------------------  \\
console.log("");
console.log("//  ---------------- Aula 05-----------------------  ");
console.log("");

let palavras = "Testando o méteodo join";

let ar = palavras.split(" ");

console.log(ar);

let jn = ar.join("@"); //Junta os elementos do array, elemento da junção é determinado pelo paramentro.

console.log(jn);




//  ----------------------------- Aula 06 ------------------------  \\
console.log("");
console.log("//  ---------------- Aula 06 -----------------------  ");
console.log("");


let vl1 = "daniel";
let vl2 = "islanny";
let vl3 = "weslley";
let vl4 = "maria";
let vl5 = "bonfim";
let vl6 = "samaritano";
let vl7 = "adalin";


//rest operador, para representar uma quantidade de argumentos em aberto é usado o argumento ( ...), na criação da função.
function imprimir(...args){
    for( let i = 0 ; i < args.length; i++){
        console.log(args[i]);
        console.log("");
    };


};

imprimir(vl1, vl2, vl3, vl4, vl5, vl6, vl7);
console.log("");
imprimir(1,2,3,4,5,6,7,8,9,10);


//  ----------------------------- Aula 07 ------------------------  \\
console.log("");
console.log("//  ---------------- Aula 07 -----------------------  ");
console.log("");


//JSON
let pessoa = {
    "nome": "Matheus",
    "idade": 28,
    "carteirade" : true,
    "profissao" : "Programador",
    "Hobbies" : ["Gamer", "Musica", "Musculação", "Natação" ]
};

console.log(pessoa);
console.log(pessoa.nome);
console.log(pessoa.idade);
console.log(pessoa.carteirade);
console.log(pessoa.profissao);
console.log(pessoa.Hobbies);

console.log("");

let pessoaTexto = JSON.stringify(pessoa);  //Transforma JSON em String

console.log("isso é uma String: " + pessoaTexto);

console.log("")

let pessoaJSON = JSON.parse(pessoaTexto); //Transforma String em JSON

console.log(pessoaJSON);


//  ---------------- Aula 01 -----------------------  \\
console.log("");
console.log("//  ---------------- Aula 01 -----------------------  ");


/* Remover elementos duplicados de um array
Crie uma função chamada removeDuplicates que recebe como parâmetro um array de elementos.

A função deve remover os elementos duplicados do array, mantendo apenas as ocorrências únicas. */

function removeDuplicates(...arr){
    
    let n = [];
    

    arr.forEach(x => {
        if(!n.includes(x)){
            n.push(x);
            
        };
    });  
    
    return n;
};

console.log(removeDuplicates(1,2,1,5));




/* Escreva uma função chamada sumUniqueNumbers que recebe um array de números como argumento.

A função deve calcular e retornar a soma de todos os números que aparecem apenas uma vez no array.

Utilize uma estrutura de dados auxiliar para armazenar a contagem de cada número no array.

Percorra o array e verifique se cada número ocorre apenas uma vez. Se sim, some-o à variável de soma.

Considere que o array pode conter tanto números inteiros positivos quanto negativos. */

function sumUniqueNumbers(...arr){
    
    let n = [];
    let nn = 0;

    arr.forEach(x => {
        if(!n.includes(x)){
            n.push(x);
            nn = nn + x;
        };
    });  
    
    return nn;
};

console.log(sumUniqueNumbers(1,2,1,5));