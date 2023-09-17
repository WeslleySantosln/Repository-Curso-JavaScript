let nome = "Weslley";
let idade = 26;
let situCadastro = true;

console.log(nome  + " Type: " + typeof(nome));
console.log(idade  + " Type: " + typeof(idade));
console.log(situCadastro  + " Type: " + typeof(situCadastro));

let pergIntro = prompt("Quer entrar na balada ? [SIM || NÃO]");

if (pergIntro.toUpperCase() == "SIM" || pergIntro.toUpperCase() == "S"){
    let pergIdade = prompt("Qual a sua idade ?");
    
    if(isNaN(pergIdade)){
        while(isNaN(pergIdade)){
            pergIdade = prompt("Qual a sua idade ?");
        }
    }

    if(pergIdade >= 18){
        console.log("passou");
    }else{
        console.log("Menor de idade não pode entrar!")
    }

}

let x = 0;

while( x <= 50){
    if((x % 2) == 0){   
        console.log(x + " é par");

    }else{
        console.log(x + " é impar");  
    }
   
    x++;
    
}