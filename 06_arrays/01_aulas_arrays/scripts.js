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

}





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






console.log("------- Carro premium: --------");









//  ----------------------------- Aula 03 ------------------------  \\
console.log("");
console.log("//  ---------------- Aula 03-----------------------  ");

