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
  contato: ContatosGetResponse | null = null;
  pagina: number = 1;
  filter: any = { nome: '', email: '', telefone: '' };
  mensagem: string = '';

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

  //capturar um contato selecionado ao clicar no botão excluir.
  setContato(contato: ContatosGetResponse) : void {
    this.contato = contato;
  }

  //função para deletar o contato
  onDelete() : void {
    this.spinnerService.show();
    this.contatosService.delete(this.contato?.idContato as string)
              .subscribe({
                next: (data) => {
                  this.mensagem = `Contato ${data.nome} excluído com sucesso!`;
                  this.ngOnInit();
                },
                error: (e) => {
                  this.mensagem = "Falha ao excluir o contato.";
                  console.log(e.error);
                }})
             .add(() => {
               this.spinnerService.hide();
             })
  }
}
