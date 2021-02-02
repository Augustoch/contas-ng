import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'situacao'
})

export class SituacaoPipe implements PipeTransform {
    transform(value: any, ...args: any[]): any {
        
        if('AGUARDANDO_PAGAMENTO' === value)
            return 'AGUARDANDO PAGAMENTO'
        if('PAGO' === value)
            return 'PAGO'
        if('AGUARDANDO_AUTORIZACAO' === value)
            return 'AGUARDANDO AUTORIZAÇÃO'
    }
}