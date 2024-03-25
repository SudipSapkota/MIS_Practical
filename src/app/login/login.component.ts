import { Component, ElementRef, ViewChild, inject } from '@angular/core';
import { AuthService } from '../Sevice/auth.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import {MatSnackBar} from '@angular/material/snack-bar'; 

interface LoginResponse {
  status: string;
  data: any; // Adjust the type according to your actual response structure
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  logindata:any;
  result: any;
  constructor(
    private matsnackService: MatSnackBar,
    private http: HttpClient
  ){}
  @ViewChild('username')username!: ElementRef;
  @ViewChild('password') password!: ElementRef;
 
authService: AuthService = inject(AuthService);
router: Router = inject(Router);
activeRoute: ActivatedRoute = inject(ActivatedRoute);

ngOnInit(){
  this.activeRoute.queryParamMap.subscribe((queries)=>{
    const logout = Boolean(queries.get('logout'));
    if(logout){
      this.authService.logout();
      const message = 'You are logged out';
      const action = 'IsLogged: ' +this.authService.isLogged;
      this.openSnackBar(message,action);
    }
  })
}


openSnackBar(message: string, action: string) { 
  this.matsnackService.open(message, action, { 
    duration: 6000, 
    verticalPosition: 'top',
    panelClass: ['green-snackbar']
    
  }); 
} 


onLoginClick(username: string, password: string) {
  const requestBody = {
    userName: username,
    password: password,
    deviceType: 'web' // Assuming 'web' as deviceType
  };

  this.http.post<LoginResponse>('https://crs.teamnext.com.np/api/Account/Login', requestBody)
    .subscribe((response) => {
      
      if (response.status === 'Sucess') {

        this.logindata = response.data;
        console.log("this.logindata",this.logindata);
        localStorage.setItem('userData', JSON.stringify(this.logindata));
        alert("Login successful");
        this.router.navigate(['/Product']);


      } else {
        alert("Login failed");
      }
    }, (error) => {
      console.error(error);
      alert("Login failed");
    });
}

}