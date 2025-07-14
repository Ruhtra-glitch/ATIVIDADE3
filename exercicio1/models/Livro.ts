import { Publicacao } from "./Publicacao";

export class Livro extends Publicacao {
  autor: string;
  anoPublicacao: number;
  estaDisponivel: boolean = true;

  constructor(titulo: string, autor: string, anoPublicacao: number) {
    super(Math.random().toString(), titulo);
    this.autor = autor;
    this.anoPublicacao = anoPublicacao;
  }

  emprestar(): boolean {
    if (this.estaDisponivel) {
      this.estaDisponivel = false;
      return true;
    }
    return false;
  }

  devolver(): boolean {
    if (!this.estaDisponivel) {
      this.estaDisponivel = true;
      return true;
    }
    return false;
  }
}
