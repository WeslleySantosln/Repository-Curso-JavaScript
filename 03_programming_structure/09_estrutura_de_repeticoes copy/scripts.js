let x = 0;

while(x < 10) {
    x = x + 1;
    console.log(x);
}



let resp = "s";

do{

    console.log(resp);
    resp = prompt("Você deseja continuar ? [S ou N]");
    if(resp.toUpperCase == "SIM" || resp.toUpperCase != "S" ){
        
    }else{
        resp = prompt("Digite um parametro correto! [S ou N]");
    }

}while(resp.toUpperCase() == "SIM" || resp.toUpperCase() == "s".toUpperCase() );
