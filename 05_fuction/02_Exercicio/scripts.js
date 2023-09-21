//  ---------------- Aula 01 -----------------------  \\
console.log("");
console.log("//  ---------------- Aula 01 -----------------------  ");

function positivar(valor){
    
    if(valor < 0 ){
        valor = valor - (valor * 2);        
        console.log(valor);
    }else{
        console.log(valor);
    }
    
}

positivar(-2);
positivar(-10);
positivar(-100000);
positivar(10);
positivar(1000000000);


console.log("abs = " + Math.abs(-2));
console.log("abs = " + Math.abs(-10));
console.log("abs = " + Math.abs(-100000));
console.log("abs = " + Math.abs(10));
console.log("abs = " + Math.abs(10));

function positivarUseString(valor){

    if(valor < 0 ){      
        let r = valor.toString();
        console.log(r.replace(/-/g, ""));      

    }else{
        console.log(valor);
    }
        
    
}

positivarUseString(-2);
positivarUseString(-100);
positivarUseString(20);


//  ---------------- Aula 02 -----------------------  \\
console.log("");
console.log("//  ---------------- Aula 02 -----------------------  ");

function analiseDeTexto(texto){

    if(texto.length > 10){
        console.log("Texto muito longo, contem: " + texto.length + " Caracteres");

    }

}

analiseDeTexto("sadddddddddddsssddddddddddddddddddddddddddddd");

function isPalindrome(palavra) {  
    var a = palavra;
    var b = '';
    var c = palavra.split('');

    for( let i = palavra.length - 1; i >= 0 ; i--){
        b = b + c[i];   
            
    }

    if(a == b){
        return true;
    }else{
        return false;
    }

}



console.log(isPalindrome('weslley'));
console.log(isPalindrome('radar'));

