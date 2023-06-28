import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ContatosPutRequest } from 'src/app/models/requests/contatos-put.request.models';
import { ContatosGetResponse } from 'src/app/models/responses/contatos-get.response.model';
import { ContatosService } from 'src/app/services/contatos.service';

@Component({
  selector: 'app-editar-contatos',
  templateUrl: './editar-contatos.component.html',
  styleUrls: ['./editar-contatos.component.css']
})
export class EditarContatosComponent implements OnInit {

  //atributos
  mensagem: string = '';

    constructor(
      private contatosService: ContatosService,
      private activatedRoute: ActivatedRoute,
      private spinnerService: NgxSpinnerService
    ){}

   ngOnInit(): void {
    this.spinnerService.show();
    let idContato = this.activatedRoute.snapshot.paramMap.get('id') as string;
    this.contatosService.getById(idContato)
                        .subscribe({
                          next: (data) => {
                            //preencher campos do formulário com os dados da API
                            this.formEdicao.patchValue(data);
                          },
                          error: (e) => {
                            console.log(e.error);
                          }
                        }).add(() => {
                          this.spinnerService.hide();
                        });
  }

  //formulário para página de edição
  formEdicao = new FormGroup({
    idContato: new FormControl('', [Validators.required]),
    nome: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(50)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    telefone: new FormControl('', [Validators.required])
  });

  //função para capturar cada campo do formulário e verificar se o mesmo está validado corretamente
  get form() : any {
    return this.formEdicao.controls;
  }

  //função para processar o submit do formulário
  onSubmit(): void {
      this.spinnerService.show();

      const request: ContatosPutRequest = {
        idContato: this.formEdicao.value.idContato as string,
        nome: this.formEdicao.value.nome as string,
        email: this.formEdicao.value.email as string,
        telefone: this.formEdicao.value.telefone as string,
      }

      this.contatosService.put(request)
                          .subscribe({
                            next: (data) => {
                              console.log(data);
                              this.mensagem = `Contato ${data.nome}, atualizado com sucesso!`;

                            },
                            error: (e) => {
                              this.mensagem = "Falha ao atualizar contato!";
                            }
                          }).add(() => {
                            this.spinnerService.hide();
                          });
  }
}
