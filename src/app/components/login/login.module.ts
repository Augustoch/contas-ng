import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { Login } from './login';
import { CommonModule } from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
    declarations: [Login],
    exports: [Login],
    imports:[
        CommonModule, 
        ReactiveFormsModule,
        MatInputModule,
        MatIconModule,
        MatButtonModule,
        RouterModule,
        AppRoutingModule
    ]
})
export class LoginModule {
    
}