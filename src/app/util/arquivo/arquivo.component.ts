import {
  Component,
  ElementRef,
  forwardRef,
  Input,
  OnInit,
  ViewChild,
  AfterViewInit,
  Optional,
  Host,
  SkipSelf,
} from '@angular/core';
import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
  AbstractControl,
  ControlContainer,
} from '@angular/forms';

@Component({
  selector: 'arquivo',
  templateUrl: './arquivo.component.html',
  styleUrls: ['./arquivo.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ArquivoComponent),
      multi: true,
    },
  ],
})
export class ArquivoComponent
  implements OnInit, ControlValueAccessor, AfterViewInit {
  value;
  @Input()
  accept;
  @Input()
  label;
  disabled = false;
  @Input() formControlName: string;
  control: AbstractControl | undefined | null;

  @ViewChild('inputFile')
  inputFile: ElementRef;

  onChange: any = () => {};
  onTouched: any = () => {};

  constructor(
    @Optional()
    @Host()
    @SkipSelf()
    private controlContainer: ControlContainer
  ) {}

  ngOnInit() {
    if (this.controlContainer) {
      if (this.formControlName) {
        this.control = this.controlContainer?.control?.get(
          this.formControlName
        );
      } else {
        console.warn(
          'Missing FormControlName directive from host element of the component'
        );
      }
    } else {
      console.warn("Can't find parent FormGroup directive");
    }
  }
  ngAfterViewInit(): void {}

  writeValue(obj: any): void {
    this.value = obj;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean) {
    this.disabled = isDisabled;
  }

  handleFileInput(event: any) {
    this.onChange(event.target.files[0]);
  }

  click() {
    this.onTouched(true);
  }

  input() {}
}
