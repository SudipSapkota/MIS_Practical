import { Component } from '@angular/core';
import { ShopNowService } from '../Sevice/shopnow.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  providers: [ShopNowService],
})
export class HomeComponent {
  constructor(private subService: ShopNowService){

  }
  OnShopNow(){
   
    this.subService.OnShopNowClicked();
  }

}
