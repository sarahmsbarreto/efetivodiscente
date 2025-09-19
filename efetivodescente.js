
const nomes = ["Ana", "Bruno", "Carlos", "Daniela", "Erick"];
console.log("O terceiro nome é:", nomes[2]);


nomes.push("Flávia");
nomes.unshift("Gabriela");
console.log("Array após adições:", nomes);


nomes.pop();
console.log("Array após remover o último nome:", nomes);


const numerosOriginais = [2, 4, 6, 8];
const numerosDobrados = numerosOriginais.map(numero => numero * 2);
console.log("Array com valores dobrados:", numerosDobrados);


const listaNumeros = [1, 3, 5, 7, 9];
const numerosMaioresQue5 = listaNumeros.filter(numero => numero > 5);
console.log("Números maiores que 5:", numerosMaioresQue5);