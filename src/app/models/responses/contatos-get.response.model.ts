//classe modelo para consulta de contatos.

export class ContatosGetResponse{
    idContato: string = '';
    nome: string = '';
    email: string = '';
    telefone: string = '';
    dataCriacao: Date | null= null;
    idUsuario: string = ''
}