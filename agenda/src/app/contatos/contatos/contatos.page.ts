import { Component, OnInit } from '@angular/core';
import { ServicoContatosService } from 'src/app/servicos/servico-contatos.service';

@Component({
  selector: 'app-contatos',
  templateUrl: './contatos.page.html',
  styleUrls: ['./contatos.page.scss'],
})
export class ContatosPage implements OnInit {
  public dadosContatos : any
  // public data = [];
  // public results = [...this.data];

  constructor(private objDados : ServicoContatosService) { 
    this.dadosContatos = objDados.enviarDados()
  }

  // handleChange(event) {
  //   const query = event.target.value.toLowerCase();
  //   this.results = this.dadosContatos.filter(d => d.toLowerCase().indexOf(query) > -1);
  // }


  ngOnInit() {
  }

}
