import { Component, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  
  @ViewChild('myForm') form: any;

Name:string='';
Email:string=''; 
Subject: string='';
Message:string='';

isSubmitted:boolean=false;

OnSubmit(){
  this.isSubmitted=true;
  alert("Thank you for contacting");
  this.form.resetForm();
  
}
canExit(){
  if((this.Name || this.Email || this.Subject || this.Message) && !this.isSubmitted){
   return confirm("You have unsaved changes.You want to navigate away?")
  }
  else{
    return true;
  }
}
}
