import { generate } from './../../../util/utils';
import { Component, OnInit } from '@angular/core';
import { SpinnerService } from './spinner-container.service';

@Component({
    selector: 'spinner-container',
    templateUrl: './spinner-container.component.html',
    styleUrls: ['./spinner-container.component.css']
})

export class SpinnerContainerComponent implements OnInit {
        
    constructor(private spinerService: SpinnerService) { }

    ngOnInit() { }
    
    get mostraSpinner(){
        return this.spinerService.mostraSpinner;
    }
}