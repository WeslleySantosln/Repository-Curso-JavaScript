//  ----------------------------- Aula 01 ------------------------  \\
console.log(" ");
console.log("//  ---------------- Aula 01 -----------------------  ");
console.log(" ");

let p = Promise.resolve(2 * 2);


let ar = [1,2,3,4,5,6];


//O time out não trava o código, ele apenas espera de acordo com o parâmentro.
setTimeout(function(){
    ar.push(7);
    ar.forEach(x => {
        console.log(x);
    });
},1);

let valor = 8;

ar.push(valor);

ar.forEach(v =>{
    console.log(v);
});

console.log(p);


//o tem pode ser encadeado
p.then((value) => {return value * 2})
 .then((value => {console.log("O valor é " + value)}));



//  ----------------------------- Aula 02 ------------------------  \\
console.log(" ");
console.log("//  ---------------- Aula 02 -----------------------  ");
console.log(" ");