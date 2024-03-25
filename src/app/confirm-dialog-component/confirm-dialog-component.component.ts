import { Component } from '@angular/core';
import {  Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { v4 as uuidv4 } from 'uuid';
// import * as CryptoJS from 'crypto-js';

interface Payment {
  amount: string;
  tax_amount: string;
  total_amount: string;
  transaction_uuid: string;
  product_code: string; 
  product_service_charge: string;
  product_delivery_charge: string;
  success_url: string;
  failure_url: string;
  signed_field_names: string;
  signature: string;
}
@Component({
  selector: 'app-confirm-dialog-component',
  templateUrl: './confirm-dialog-component.component.html',
  styleUrl: './confirm-dialog-component.component.css'
})
export class ConfirmDialogComponentComponent {
  transactionUuid: string = '';

  constructor(
    public dialogRef: MatDialogRef<ConfirmDialogComponentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.generateUUID();
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

  generateUUID(): void {
    // Generate a random UUID (v4)
    this.transactionUuid = uuidv4();
  }

  submitPayment(price: any) {

    let obj = {
      amount: price,
      tax_amount: '0',
      total_amount: price,
      transaction_uuid: this.transactionUuid,
      product_code: 'EPAYTEST',
      product_service_charge: '0',
      product_delivery_charge: '0',
      success_url: 'https://esewa.com.np',
      failure_url: 'http://localhost:56460/**',
      signed_field_names: 'total_amount,transaction_uuid,product_code',
      signature: ''
    };
  }
}