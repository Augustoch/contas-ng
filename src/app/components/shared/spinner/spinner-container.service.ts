import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class SpinnerService {
    private _mostraSpinner: boolean = false;
    public get mostraSpinner(): boolean {
        return this._mostraSpinner;
    }
    
    
    constructor() { }
    
    
    mostrar(){
        this._mostraSpinner = true;
    }
    
    esconder(){
        this._mostraSpinner = false;        
    }
    
    
}