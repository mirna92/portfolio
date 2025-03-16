import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { MatCardModule } from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import emailjs from 'emailjs-com';
import AOS from "aos";

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule,MatCardModule,MatFormFieldModule,MatInputModule,CommonModule,ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  public form:FormGroup;
  loading:boolean=false;
  private serviceId = '1212';
  private templateId = '1';
  private PublicKey = 'yb2mC2WCc7VM0nXLx';

constructor(private http:HttpClient,private toaster:ToastrService,private fb: FormBuilder){
  this.form = this.fb.group({
    name: new FormControl(null, [Validators.required]),
    email: new FormControl(null, [Validators.required]),
    message: new FormControl(null,[Validators.required])
  });
}
  ngOninit(){
    
  }
  sendMessage() {
    this.loading=true;
    return emailjs.send(this.serviceId, this.templateId, this.form.value, this.PublicKey)
      .then(response => {this.toaster.success('Message sent successfully!');
        this.loading=false;
        this.form.reset();})
      .catch(error => console.error('Error sending email:', error));
  }

}