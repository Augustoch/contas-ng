import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
    selector: 'logout',
    templateUrl: 'logout.component.html',
    styleUrls: ['./logout.component.css']
})

export class LogoutComponent implements OnInit {
    constructor(
        public authenticationService: AuthenticationService
      ) {}
    
      ngOnInit() {}
    
    
      logOut() {
        this.authenticationService.logout();
      }
}