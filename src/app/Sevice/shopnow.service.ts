import { Injectable } from '@angular/core';
// import { InjectSetupWrapper } from '@angular/core/testing';
import {MatSnackBar} from '@angular/material/snack-bar'; 

@Injectable({
    providedIn:'root'
})

export class ShopNowService{

    constructor(private matsnackService: MatSnackBar) {

    } 
  
    openSnackBar(message: string, action: string) { 
     this.matsnackService.open(message, action, { 
        duration: 2000, 
      }); 
    } 
    
    
    OnShopNowClicked(){
        const message= 'First You Have To Login';
        const action ="success";
        this.openSnackBar(message, action);
    }

}