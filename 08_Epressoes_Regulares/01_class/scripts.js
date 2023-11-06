//  ----------------------------- Aula 01 ------------------------  \\
console.log(" ");
console.log("//  ---------------- Aula 01 -----------------------  ");
console.log(" ");


const reg1 = new RegExp('bola');

console.log(reg1.test("quadrado, triangulo, bola"));
console.log(reg1.test("quadrado, triangulo, xis"));
console.log("");

const reg2 = /triangulo/;

console.log(reg2.test("quadrado, quadrado, bola"));
console.log(reg2.test("quadrado, triangulo, xis"));
console.log("");

console.log(/xis/.test("quadrado, quadrado, bola"));
console.log(/xis/.test("quadrado, triangulo, xis"));
console.log("");




//  ----------------------------- Aula 02 ------------------------  \\
console.log(" ");
console.log("//  ---------------- Aula 02 -----------------------  ");
console.log(" ");

const reg3 = /[12345]/;

console.log(reg3.test("Temos o número 6")); 
console.log(reg3.test("Temos o número 2"));
console.log(reg3.test("Temos o número 23")); //vai retornar verdadeiro
console.log(reg3.test("Temos o número 60")); //vai retornar falso

const reg4 = /[0-9]/;

console.log(reg4.test("Temos o número 65448484884848484")); //vai retornar verdadeiro
console.log(reg4.test("Temos o número 11")); //vai retornar verdadeiro

//  ----------------------------- Aula 03 ------------------------  \\
console.log(" ");
console.log("//  ---------------- Aula 03 -----------------------  ");
console.log(" ");

const pontoRegex = /./; //Aceita tudo, menos quebra de linha

console.log("");
console.log('. //Aceita tudo, menos quebra de linha');
console.log(pontoRegex.test("asd"));
console.log(pontoRegex.test(" "));
console.log(pontoRegex.test("123"));
console.log(pontoRegex.test("123sad"));

const dRegex = /\d/; // [0-9] aceita todos os numeros

console.log("");
console.log('d // [0-9] aceita todos os numeros');
console.log(dRegex.test("asd"));
console.log(dRegex.test(" "));
console.log(dRegex.test("123"));
console.log(dRegex.test("123sad"));

const dRegex2 = /\D/; // [^0-9] Não aceita que só tenha numeros + operador not

console.log("");
console.log('D // [^0-9] Não aceita que só tenha numeros');
console.log(dRegex2.test("asd"));
console.log(dRegex2.test(" "));
console.log(dRegex2.test("123"));
console.log(dRegex2.test("123sad"));

const sRegex = /\s/; // Não aceita alfanumerico

console.log("");
console.log('s // Não aceita alfanumerico');
console.log(sRegex.test("asd"));
console.log(sRegex.test(" "));
console.log(sRegex.test("123"));
console.log(sRegex.test("123sad"));

const wRegex = /\w/; // Só aceita alfanumerico

console.log("");
console.log('w  // Só aceita alfanumerico');
console.log(wRegex.test("asd ao"));
console.log(wRegex.test(" "));
console.log(wRegex.test("123"));
console.log(wRegex.test("123sad"));


const dia = /\d\d/; // 2 numeros

console.log("");
console.log("/\d\d/; // 2 numeros");
console.log(dia.test("2019") && "2019".length == 2);
console.log(dia.test("asd"));
console.log(dia.test("05") && "05".length == 2);
console.log(dia.test("asd1"));

const palavrasPeloMenosTresLetras = /\w\w\w/; // 3 letras

console.log("");
console.log("/\w\w\w/; // 3 letras");
console.log(palavrasPeloMenosTresLetras.test("asd"));
console.log(palavrasPeloMenosTresLetras.test("asdd"));
console.log(palavrasPeloMenosTresLetras.test("as"));



const cep = /\d{5}-\d{3}/; //Coloca como parâmetro quantidade exigida

console.log("");
console.log("/\d{5}-\d{3}/; //Coloca como parâmetro quantidade exigida");
console.log(cep.test("88117-500"));
console.log(cep.test("asd"));
console.log(cep.test("881-50"));
console.log(cep.test("99999-999"));

const tel = /\(\d{2}\)\d{4,5}-\d{4}/; //Coloca como parâmetro quantidade exigida

console.log("");
console.log("/\(\d{2}\)\d{4,5}-\d{4}/; //Coloca como parâmetro quantidade exigida");
console.log(tel.test("(48)9999-9999"));


console.log("");
console.log("/\(\d{2}\)\d{4,5}-\d{4}/; //substituimos o (test) por (exec), o exec retorna mais detalhes sobre o teste");

console.log(tel.exec("(48)55555-4444")); //substituimos o "test" por "exec", o exec retorna mais detalhes sobre o teste



const reg = /\w+: (Matheus|João|Maria)/; // Nome: nadsuasudi


console.log("");
console.log("/\w+: (Matheus|João|Maria)/");
console.log(reg.test("Nome: Matheus"));
console.log(reg.test("Nome: José"));
console.log(reg.test("Nome: Maria"));



//  ----------------------------- Aula 04 ------------------------  \\
console.log(" ");
console.log("//  ---------------- Aula 04 -----------------------  ");
console.log(" ");