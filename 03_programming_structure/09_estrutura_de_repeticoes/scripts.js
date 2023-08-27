let x = 0;

while(x <= 10) {
    x = x + 1;
    console.log("O numero é:" + x);
}



let resp = "s";
let pp = 0;

do{
   
    
    console.log("A resposta é: " + resp + " - N° " + pp);
    resp = prompt("Você deseja continuar ? [S ou N]");
    if(resp.toUpperCase() == "SIM"){
        resp = "S";
    }
    while(resp.toUpperCase() != "S" ){
        do{
            resp = prompt("Digite um parametro correto! [S ou N]");
        }while(resp.toUpperCase() != "S" || resp.toUpperCase() != "SIM");
    }
    pp = pp + 1;
}while(resp.toUpperCase() == "SIM" || resp.toUpperCase() == "s".toUpperCase() );




for(let xx = 0 ; xx < 100 ; xx = xx+3 ){
    console.log(`Weslley - A soma de ${xx} + 2 é igual a: ${xx + 2}`);
}
