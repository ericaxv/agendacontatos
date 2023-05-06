import { AbstractControl } from "@angular/forms";

export class MatchPasswordValidator{
    // realiza a validação para match das senhas

    static matchPassword(abstractControl: AbstractControl){
        let senha = abstractControl.get('senha')?.value;
        let senhaConfirmacao = abstractControl.get('senhaConfirmacao')?.value;

        if(senha != senhaConfirmacao){
            abstractControl.get('senhaConfirmacao')?.setErrors({
                matchPassword: true
            })
        }

        return null;
    }
}