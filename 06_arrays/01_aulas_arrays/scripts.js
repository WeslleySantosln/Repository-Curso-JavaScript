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

let filaDoPao = ["one", "twe" , "tre" , "four" , "five" ];


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



//CLIENTE VOLTOU PORQUE O TROCO TAVA ERRADO
filaDoPao.unshift("twe");
console.log();
console.log("//Cliente voltou porque o troco tava errado");

filaDoPao.forEach(fila => {
    console.log(fila); 
});



//ULTIMO CLIENTE DESISTIU PORQUE TAVA DEMORANDO PRA FILA ANDAR
filaDoPao.pop();
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

//  ----------------------------- Aula 04 ------------------------  \\
console.log("");
console.log("//  ---------------- Aula 04-----------------------  ");

