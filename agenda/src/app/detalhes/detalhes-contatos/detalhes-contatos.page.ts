import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ServicoContatosService } from 'src/app/servicos/servico-contatos.service';
import { ActionSheetController, AlertController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-detalhes-contatos',
  templateUrl: './detalhes-contatos.page.html',
  styleUrls: ['./detalhes-contatos.page.scss'],
})
export class DetalhesContatosPage implements OnInit {
  public dadosForm: FormGroup
  public dadoSelecionado: any
  public editar = false
  public data = ['this.dadoSelecionado.value'];
  public results = [...this.data];

  handleChange(event) {
    const query = event.target.value.toLowerCase();
    this.results = this.data.filter(d => d.toLowerCase().indexOf(query) > -1);
  }

  constructor(
    private objDados : ServicoContatosService,
    private route : ActivatedRoute,
    private actionSheetController: ActionSheetController,
    private dadosBuilder: FormBuilder,
    private _route : Router,
    private alertController: AlertController) { }

    async presentAlert() {
      const alert = await this.alertController.create({
        header: 'Alert',
        subHeader: 'Algo deu errado!',
        message: 'Por Favor, preencha todos os campos',
        buttons: ['OK'],
      });
  
      await alert.present();
    }
    async presentActionSheet() {
      const actionSheet = await this.actionSheetController.create({
        
        cssClass: 'my-custom-class',
        buttons: [{
          text: 'Delete',
          role: 'destructive',
          icon: 'trash',
          id: 'delete-button',
          data: {
            type: 'delete'
          },
          handler: () => {
            this._route.navigate(['/contatos'])
            this.deletar()
             
          },
        }, {
          text: 'Cancel',
          icon: 'close',
          role: 'cancel',
        }]
      });
      await actionSheet.present();
      const { role, data } = await actionSheet.onDidDismiss();
      console.log('onDidDismiss resolved with role and data', role, data);
    }
    alterar(){
      this.editar = true
    }

    salvar(){
      const id : number = Number(this.route.snapshot.paramMap.get('id'))
      if(this.dadosForm.valid){
      if(id > 0){
        this.editar = false
      } else{
        if(this.dadosForm.valid){
        this.objDados.receberDados(this.dadoSelecionado)
        this.editar = false
        }
      }
    }
    else{
      this.presentAlert()
    }
  }
    deletar(){
      this.objDados.apagarDados(this.dadoSelecionado)
    }  
  
  ngOnInit() {
    const id : number = Number(this.route.snapshot.paramMap.get('id'))
    if(id > 0){
      this.dadoSelecionado = this.objDados.filtrarContatos(id)
    } else{
      this.dadoSelecionado = {id, nome:"",sobrenome:'',tipo_tel:'',telefone:"", email:''}
    }

    this.dadosForm = this.dadosBuilder.group({
      nome: ['',Validators.compose([Validators.required,Validators.minLength(3),Validators.maxLength(15),Validators.pattern('[a-zA-Z]*')])],
      telefone: ['',Validators.compose([Validators.required, Validators.minLength(15)])],
      email: ['',Validators.compose([Validators.required,Validators.email])],
      sobrenome: ['',Validators.maxLength(30)],
      tipo_tel: ['']
      
    })
  }


}
