import { Inject, inject } from "@angular/core";
import { AuthService } from "./Sevice/auth.service";
import { Router } from "@angular/router";

export const CanActivate = () =>{
    const authService  = Inject(AuthService);
    const router =inject(Router);


    if(authService.IsAuthenticated()){
    return true;
    }
    else{
        router.navigate(['/login']);
        return false;
        }
    
}