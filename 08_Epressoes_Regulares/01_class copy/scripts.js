//  ----------------------------- Aula 01 ------------------------  \\
console.log("");
console.log("//  ---------------- Aula 01 -----------------------  ");
console.log("");


nome = "Weslley";

idade = "18";

function sx(valor){
"use strict" //Força a variavel ser declarada antes da inicialização. Precisa ser declarada no inicio da aplicação ou função.
let sexo = valor;
console.log(sexo);
//Não permite usar o object.prototype

};


console.log(nome);
console.log(idade);
sx("Masculino");



//  ----------------------------- Aula 02 ------------------------  \\
console.log("");
console.log("//  ---------------- Aula 02 -----------------------  ");
console.log("");


let a = 1;
let b = 2;
let c = 3;

if(c > a) {
  a = b;
  debugger;
}

for(let i = 5; i > 0; i--) {
  b++;
  a = a + c + 1;
  c += 2;
  debugger;
}

if(b == a) {
  a++;
} else {
  a = a + b + c;
}

debugger;

a = a * b;

debugger;

console.log('teste');

//  ----------------------------- Aula 03 ------------------------  \\
console.log("");
console.log("//  ---------------- Aula 03 -----------------------  ");
console.log("");

function checarNumber(valor){
    let number = Number(valor);
    
    if(Number.isNaN(number)){
        console.log("Só é permitido o uso de valores");
        // throw new Error("Parâmetro precisa ser um numero")
    }else{
        console.log("Aprovado!");
        return number;       
    }
};

checarNumber(5);
checarNumber("teste");

//  ----------------------------- Aula 04 ------------------------  \\
console.log("");
console.log("//  ---------------- Aula 04 -----------------------  ");
console.log("");


try{
    let a = 2 * w;
} catch(e){
    console.log("Parâmetro não definido " + e);
}finally{
    console.log("Executou");
};

console.log("");

try{
    let a = 2 * 2;
    console.log(a);
} catch(e){
    console.log("Parâmetro não definido " + e);
}finally{
    console.log("Executou2");
};

//  ----------------------------- Aula 05 ------------------------  \\
console.log("");
console.log("//  ---------------- Aula 05 -----------------------  ");
console.log("");