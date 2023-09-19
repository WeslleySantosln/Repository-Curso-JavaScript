//  ---------------- Aula 01 -----------------------  \\
console.log("");
console.log("//  ---------------- Aula 01 -----------------------  ");

function imprimirNoConsole(){
    console.log("Hello Word!");
}

imprimirNoConsole();


function imprimirNumero(num){
    console.log("O numero é: " + num);
}


imprimirNumero(1);
imprimirNumero(2);
imprimirNumero(3);
imprimirNumero(100);

const numeroAleatorio = function(){
    console.log(Math.random());
}

numeroAleatorio();
numeroAleatorio();

//  ---------------- Aula 02 -----------------------  \\
console.log("");
console.log("//  ---------------- Aula 02 ----------------------- ");

function podeDirigir(idade,cnh,nome){
    if(idade >= 18 && cnh == true){
        console.log(nome + " ,pode Dirigir!");

    }else if(idade < 18){
        console.log("Autorização Negada idade: " + idade);
    }else if(idade < 18 && cnh != true){
        console.log(nome +" ,autorização Negada idade: " + idade + "CNH: " + cnh );
    }else if(cnh != true){
        console.log(nome +" ,autorização Negada cnh: " + cnh);
    }else{
        console.log(nome +" ,negado por outro motivo, verifique os paramentros");
    }

}

podeDirigir(18,true,"João");
podeDirigir(18,false,"Maria");
podeDirigir(18,1,"Jose");
podeDirigir(18,0,"Ana");
podeDirigir(19,1,"Ana");

//  ---------------- Aula 03 -----------------------  \\
console.log("");
console.log("//  ---------------- Aula 03 -----------------------  ");

let x = "maria";

function f(){
    let x = "leticia";
    console.log(x); 

}

console.log(x);
f();

//  ---------------- Aula 04 -----------------------  \\
console.log("");
console.log("//  ---------------- Aula 04 -----------------------  ");

let consoleTeste = () =>{
    console.log("Olá mundo!");   
};

consoleTeste();

let soma = (a, b) =>{
    return a + b;
};

console.log(soma(10,20));

const raizCu = (x) =>{
     xz = x * x * x;
     return xz;

}

const raizQua = x => x * x;


console.log(raizCu(2));
console.log(raizQua(2));

//  ---------------- Aula 05 -----------------------  \\
console.log("");
console.log("//  ---------------- Aula 05 -----------------------  ");

function dados(nome, idade){
    if( idade === undefined){
        console.log("Seu nome é: " + nome);

    }else{
        console.log("seu nome é: " + nome + " e Sua idade é: " + idade);

    }
}

dados("Weslley");
dados("weslley", 18);


function repetirFrases(frase, qtd = 2 ){ 
    for( i = 1; i <= qtd; i++){
        console.log(frase);
    }
    r = prompt("Quer repetir ? [SIM || NÃO]");
    querRepetir(r, frase);

};


repetirFrases("Hello world!", 3);

function querRepetir(r, fra){
    if(r.toUpperCase() == "SIM" || r.toUpperCase() == "S"  ){
        console.log(fra);
        r = prompt("Quer repetir ? [SIM || NÃO]");
        querRepetir(r, fra);
    }else{
        console.log("Ativide parou");
    }
};




