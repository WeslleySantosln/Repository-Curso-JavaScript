let num = 47;
let divisoes = 0;

for(let i = 1; i <= num ; i++ ){

    if((num % i) == 0){
        divisoes++;
    }
    
}


if( divisoes == 2){
    console.log("O numero é primo!");

}else{
    console.log("O numero NÃO é primo!");

}