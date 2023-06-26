import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ContatosGetResponse } from 'src/app/models/responses/contatos-get.response.model';
import { ContatosService } from 'src/app/services/contatos.service';

@Component({
  selector: 'app-consultar-contatos',
  templateUrl: './consultar-contatos.component.html',
  styleUrls: ['./consultar-contatos.component.css']
})
export class ConsultarContatosComponent implements OnInit{
  //atributos
  contatos: ContatosGetResponse[] = [];
  pagina: number = 1;
  filter: any = { nome: '', email: '', telefone: '' };

  // método construtor
  constructor(
    private contatosService: ContatosService,
    private spinnerService: NgxSpinnerService
  ){

  }

  //Função executada no momento do carregamento do componente.
  ngOnInit(): void {
    this.spinnerService.show();

    this.contatosService.getAll()
                        .subscribe({
                          next: (data) => {
                            this.contatos = data;
                          },
                          error: (e) => {
                            console.log(e);
                          }
                        }).add(() => {
                          this.spinnerService.hide();
                        });
  }
  
  // Função para capturar e armazenar a página do componente ngx-pagintation
  pageChange(event: any): void{
    this.pagina = event
  }
}
