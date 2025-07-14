import { Livro } from "./models/Livro";

const livro1 = new Livro("Dom Casmurro", "Machado de Assis", 1899);
const livro2 = new Livro("1984", "George Orwell", 1949);

if (livro1.emprestar()) {
  console.log("Livro emprestado com sucesso.");
} else {
  console.log("Livro indisponível para empréstimo.");
}

if (!livro1.emprestar()) {
  console.log("Tentativa de novo empréstimo falhou.");
}

livro1.devolver();

if (livro1.emprestar()) {
  console.log("Livro emprestado novamente após devolução.");
}
