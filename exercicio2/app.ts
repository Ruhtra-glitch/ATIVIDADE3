import { CatalogoGenerico } from "./models/CatalogoGenerico";
import { Eletronico } from "./interfaces/IEletronico";
import { Vestuario } from "./interfaces/IVestuario";

const eletronicos: Eletronico[] = [
  { id: 1, nome: "Notebook", preco: 3000, marca: "Dell" },
  { id: 2, nome: "Smartphone", preco: 2000, marca: "Samsung" }
];

const vestuarios: Vestuario[] = [
  { id: 1, nome: "Camiseta", preco: 50, tamanho: "M" },
  { id: 2, nome: "Calça Jeans", preco: 120, tamanho: "G" }
];

const catalogoE = new CatalogoGenerico<Eletronico>();
eletronicos.forEach(e => catalogoE.adicionarProduto(e));

const catalogoV = new CatalogoGenerico<Vestuario>();
vestuarios.forEach(v => catalogoV.adicionarProduto(v));

console.log("Eletrônicos:", catalogoE.listarProdutos());
console.log("Vestuário:", catalogoV.listarProdutos());

const resultadoBusca = catalogoV.buscarPorNome("calça");
if (resultadoBusca.length > 0) {
  console.log("Encontrado:", resultadoBusca);
} else {
  console.log("Nenhum item encontrado.");
}
