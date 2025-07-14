import formatarNome, { contarVogais } from "./utils/strings";
import { OperacoesMatematicas, MAX_VALOR } from "./utils2/numeros";

console.log("Nome formatado:", formatarNome("joão silva souza"));
console.log("Total de vogais:", contarVogais("A natureza é incrível"));

const numeros = [10, 25, 5, 40, 15];
const soma = OperacoesMatematicas.somarArray(numeros);
console.log("Soma:", soma);
console.log("É par?", OperacoesMatematicas.ehPar(soma));

if (soma > MAX_VALOR) {
  console.log("Soma excede o valor máximo permitido.");
} else {
  console.log("Soma dentro do limite.");
}
