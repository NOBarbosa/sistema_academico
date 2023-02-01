import { Aluno } from "./Aluno";
import { TUsuario, Usuario } from "./Usuario";

interface IProfessor {
  lancarNota(aluno: Aluno, nota:number):void
}


export class Professos extends Usuario implements IProfessor{
  discplina: string

  constructor(dados:TUsuario, displina:string){
    super(dados)
    this.discplina = displina
  }

  lancarNota(aluno: Aluno, nota: number): void {

    this.verificaLogin()
    aluno.notas.push(nota);


  }

  private verificaLogin():void{
    if(!this.logado){
      throw new Error('Professor não está autenticado.')
    }
  }

}