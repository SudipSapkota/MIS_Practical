import { Component,Inject} from '@angular/core';
import { CartService } from '../Sevice/cart.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponentComponent } from '../confirm-dialog-component/confirm-dialog-component.component';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  constructor(private cartService: CartService, private dialog: MatDialog) { }

  products: any[] = [{
    id: 1,
    name: 'Product 1',
    price: 19.99,
    description: 'Description of Product 1.',
    imageUrl: 'assets/image/product1.jpg'
  },
  {
    id: 2,
    name: 'Product 2',
    price: 29.99,
    description: 'Description of Product 2.',
    imageUrl: 'assets/image/product2.jpg'
  },
  {
    id: 3,
    name: 'Product 3',
    price: 29.99,
    description: 'Description of Product 3.',
    imageUrl: 'assets/image/product3.jpg'
  },{
    id: 1,
    name: 'Product 1',
    price: 19.99,
    description: 'Description of Product 1.',
    imageUrl: 'assets/image/product1.jpg'
  },
  {
    id: 2,
    name: 'Product 2',
    price: 29.99,
    description: 'Description of Product 2.',
    imageUrl: 'assets/image/product2.jpg'
  },
  {
    id: 3,
    name: 'Product 3',
    price: 29.99,
    description: 'Description of Product 3.',
    imageUrl: 'assets/image/product3.jpg'
  },{
    id: 1,
    name: 'Product 1',
    price: 19.99,
    description: 'Description of Product 1.',
    imageUrl: 'assets/image/product1.jpg'
  },
  {
    id: 2,
    name: 'Product 2',
    price: 29.99,
    description: 'Description of Product 2.',
    imageUrl: 'assets/image/product2.jpg'
  },


  ]

    addToCart(product: any) {
      const dialogRef = this.dialog.open(ConfirmDialogComponentComponent, {
        width: '40%', // Set width to full screen
        height: '100%', // Set height to full screen
        position: {
          right: '0', // Align left
          top: '0' // Align top
        },
        panelClass: 'full-screen-dialog',
        data: { productName: product.name ,productId:product.id,productPrice:product.price,productimage:product.imageUrl}
      });


      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          this.cartService.addToCart(product);
          window.alert('Product added to cart');
        }
      });
    }


}

