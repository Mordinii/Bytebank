import { Component, EventEmitter, Output } from "@angular/core";

@Component ({
    selector:'app-body',
    templateUrl:'./body.component.html',
    styleUrls:['./body.component.css']
})
    

export class BodyComponent {

@Output() aoTransferir = new EventEmitter<any>();


    valor!: number;
    destino!: number;


    transferir(): void{
        
        const valorEmitir = {valor: this.valor, destino: this.destino} 
        this.aoTransferir.emit(valorEmitir);

    }

    


}

    

