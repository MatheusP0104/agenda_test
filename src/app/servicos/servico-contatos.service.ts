import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicoContatosService {
  private todosContatos= [
    {id:1, nome: 'Matheus', sobrenome: 'Santos',tipo_tel: 'Celular' , telefone: '35 99814-6747', email: 'ms2969887@gmail.com'},
    {id:2, nome: 'Andre', sobrenome: 'Luis', tipo_tel: 'Celular' , telefone: '14 99247-6223', email: 'andreluis@gmail.com'},
    {id:3, nome: 'Cristiane', sobrenome: 'Santos', tipo_tel: 'Celular' , telefone: '11 99159-0887', email: 'crissantos@gmail.com'},
  ]

  constructor() { }
  enviarDados(){
    return this.todosContatos
  }
  filtrarContatos(id : number){
    const contatoSelecionado = this.todosContatos.filter(contato => contato.id === id)
    return contatoSelecionado[0]
  }
  receberDados(dadosrecebidos : any){
    dadosrecebidos.id = this.todosContatos.length + 1
    this.todosContatos.push(dadosrecebidos)
  }
  apagarDados(dadosrecebidos: any){
    const index = this.todosContatos.indexOf(dadosrecebidos)
    this.todosContatos.splice(index,1)
  }
}
