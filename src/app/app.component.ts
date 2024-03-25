import { Component } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar'; 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'routing-practice';
  constructor(private _snackBar: MatSnackBar) {} 
  
  openSnackBar(message: string, action: string) { 
    this._snackBar.open(message, action, { 
      duration: 2000, 
    }); 
  } 
}
