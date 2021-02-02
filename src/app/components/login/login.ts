import { AuthenticationService } from './../../services/authentication.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from "@angular/core";
import { first } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'login',
  templateUrl: './login.html' ,
  styleUrls: ['./login.css']
})
export class Login implements OnInit{
  
  formLogin: FormGroup;
  returnUrl: string = 'pagador';
  error = '';
  value = 'limpar';
  
  constructor(private fb: FormBuilder, private authenticationService: AuthenticationService, private route: ActivatedRoute,
    private router: Router){
    
  }
  
  ngOnInit(): void {
    this.formLogin =  this.fb.group({
      usuario: [null, Validators.required],
      senha: [null, Validators.required]
    })
  }
  
  login(){
    this.authenticationService.login(this.formLogin.controls.usuario.value, this.formLogin.controls.senha.value)
            .pipe(first())
            .subscribe(
                data => {
                    this.router.navigate([this.returnUrl]);
                    this.authenticationService.setUserName(this.formLogin.controls.usuario.value);
                },
                error => {
                    this.error = error;
                });
    }
  }