/**
 * Classe models de dados para resposta do serviço POST de Contatos
 */
export class ContatosPostResponse{
    idContato: string = '';
    nome: string = '';
    email: string = '';
    telefone:  string = '';
    dataCriacao: Date | null = null;
    idUsuario: string = '';
}