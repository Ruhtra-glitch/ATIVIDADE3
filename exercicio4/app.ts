import { Venda } from "./interfaces/IVenda";
import { gerarResumoVendas, atualizarStatusVenda, registrarVenda, prepararVendaParaCliente } from "./utils/relatorioVendas";

const vendas: Venda[] = [
  { idVenda: "V001", data: "2025-07-01", valorTotal: 100, clienteId: "C001", status: "pendente" },
  { idVenda: "V002", data: "2025-07-01", valorTotal: 200, clienteId: "C002", status: "concluida" },
  { idVenda: "V003", data: "2025-07-01", valorTotal: 150, clienteId: "C003", status: "cancelada" }
];

console.log("Resumo:", gerarResumoVendas(vendas));

const vendaAtualizada = atualizarStatusVenda(vendas[0], { status: "concluida" });
console.log("Venda atualizada:", vendaAtualizada);

const vendaReadOnly: Readonly<Venda> = { ...vendas[1] };
registrarVenda(vendaReadOnly);

console.log("Para o cliente:", prepararVendaParaCliente(vendas[1]));

vendas.forEach(v => {
  if (v.status === "concluida") {
    console.log("Venda concluída:", v.idVenda);
  }
});
