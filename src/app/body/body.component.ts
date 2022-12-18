import { Component } from "@angular/core";

@Component ({
    selector:'app-body',
    templateUrl:'./body.component.html',
    styleUrls:['./body.component.css']



})

    

export class BodyComponent {

    valor!: number;
    destino!: number;


    transferir(){
        
        console.log("Valor:", this.valor);
        console.log("Destino:", this.destino);

    }

    


}

    

