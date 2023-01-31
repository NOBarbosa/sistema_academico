import { TUsuario, Usuario } from "./Usuario";

export class Professos extends Usuario{
  discplina: string

  constructor(dados:TUsuario, displina:string){
    super(dados)
    this.discplina = displina
  }

  private verificaLogin():void{
    if(!this.logado){
      throw new Error('Professor não está autenticado.')
    }
  }

}