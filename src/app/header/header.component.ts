import { Component } from '@angular/core';
import { ShopNowService } from '../Sevice/shopnow.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent { 
  
  
 constructor(private subService: ShopNowService){

 }
  OnShopNow(){
   
    this.subService.OnShopNowClicked();
  }
}
 