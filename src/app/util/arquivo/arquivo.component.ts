import { Component, ElementRef, forwardRef, Input, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
    selector: 'arquivo',
    templateUrl: './arquivo.component.html',
    styleUrls:  ['./arquivo.component.css'],
    providers: [
        {
          provide: NG_VALUE_ACCESSOR,
          useExisting: forwardRef(() => ArquivoComponent),
          multi: true
        }
      ]
})

export class ArquivoComponent implements OnInit, ControlValueAccessor, AfterViewInit {
    
    value;
    @Input()
    accept;
    @Input()
    label;
    disabled = false;
    constructor() { }
    
    @ViewChild('inputFile')
    inputFile: ElementRef;
    
    onChange: any = () => { };
    onTouched: any = () => { };
    
    ngOnInit() {
    }
    ngAfterViewInit(): void {

    }
        
    writeValue(obj: any): void {
        this.value = obj;
    }
    registerOnChange(fn: any): void {
        this.onChange = fn;
    }
    registerOnTouched(fn: any): void {
        this.onTouched = fn;
    }
    
    setDisabledState(isDisabled: boolean){
        this.disabled = isDisabled;
    }
    
    handleFileInput(event: any) {
        this.onChange(event.target.files[0])
    }
    
    click(){
        this.onTouched(true)
    }
    
    input(){
        
    }
}