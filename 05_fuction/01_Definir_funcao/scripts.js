//  ---------------- Aula 01 -----------------------  \\
console.log("");
console.log("//  ---------------- Aula 01 -----------------------  \\");

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
console.log("//  ---------------- Aula 02 -----------------------  \\");

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
console.log("//  ---------------- Aula 03 -----------------------  \\");

let x = "maria";

function f (){
  return "ana";  
}

let
