import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { MatCardModule } from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
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
constructor(private http:HttpClient,private toaster:ToastrService,private fb: FormBuilder){
  this.form = this.fb.group({
    name: new FormControl(null, [Validators.required]),
    email: new FormControl(null, [Validators.required]),
    message: new FormControl(null,[Validators.required])
  });
}
  ngOninit(){
    
  }
  sendMessage(){
    console.log(this.form);
    this.loading=true;
   this.http.post('http://localhost:3000/send-email',this.form.value).subscribe(response=>{
  this.toaster.success('Message sent successfully!');
  this.loading=false;
  this.form.reset();
  },error=>{
    this.toaster.error('Error sending message');
  }
)
  }
}