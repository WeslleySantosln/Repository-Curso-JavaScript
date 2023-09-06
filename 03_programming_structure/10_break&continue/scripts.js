let x = 0;
let vs = 0;

var nome = "Matheus";

while(x <= 10){
    
    let rd = Math.trunc(Math.random() * 11);
    x++;
    vs++;
    console.log(vs + ": " + nome + " " + x + " - Random =  " + rd);
    
    if(rd == 10){
        console.log("!Parou");
        break;
    } 
    if(rd == 1){
        console.log("!Pulou");
        continue;
    }

    for(let i = 0; i <= 2 ; i++){
      
        console.log(nome + x + "." + i);
        
    }
    
       
}