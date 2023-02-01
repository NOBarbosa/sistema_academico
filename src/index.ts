import { Aluno } from "./Aluno";
import { Professos } from "./Professor"
import { Usuario } from "./Usuario";

const joao = {
  nome:'João',
  email:"joao@email.com",
  senha:'123456'
}
const ana = {
  nome:'Ana',
  email:"ana@email.com",
  senha:'123456'
}

const professoraAna = new Professos(ana, 'Física');
professoraAna.login('123456')


const alunoJoao = new Aluno(joao)

professoraAna.lancarNota(alunoJoao, 5)
professoraAna.lancarNota(alunoJoao, 10)

// console.log(alunoJoao.notas)
console.log(alunoJoao.obterMedia())