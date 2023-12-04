//  ----------------------------- Aula 01 ------------------------  \\
console.log(" ");
console.log("//  ---------------- Aula 01 -----------------------  ");
console.log(" ");

let btn = document.querySelector(".button");
let btn2 = document.querySelector(".button2");
let btn3 = document.querySelector(".button3");
let gf = document.querySelector("body");
let btn4 = document.querySelector(".button4");
let pr = document.querySelector("p");
let tt = document.querySelector("h1");



function corRandom(){
    const letters = '0123456789ABCDEF';
    let color = '#';

    for(let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
    }

    return color;    
}


function borderRandom(){  
    let color = 'solid 1px ';
    color = color + corRandom();

    return color;    
}




function tema(e){  
    gf.style.color = "white"; 
    gf.style.background = "black";
    console.log(e);
    
} 


btn.addEventListener("click", tema);


btn2.addEventListener("click", function tema(event){  
    gf.style.color = "black"; 
    gf.style.background = "white";
    console.log(event)
});


btn3.addEventListener("click", function(){  
    btn.removeEventListener("click", tema )
    btn2.removeEventListener("click", tema ) //não enxerga a função tema dentro do event e não consegue remover
});

btn4.addEventListener("click", function(e){
    tt.style.color = corRandom();
    e.stopPropagation(); 
});

pr.addEventListener("click", function(){
    console.log("clicou no paragrafo");
    pr.style.border = borderRandom();
});






//  ----------------------------- Aula 02 ------------------------  \\
console.log(" ");
console.log("//  ---------------- Aula 02 -----------------------  ");
console.log(" ");


