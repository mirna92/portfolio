import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { HomeComponent } from "./home/home.component";
import { SkillsComponent } from "./skills/skills.component";
import { MyProjectsComponent } from "./my-projects/my-projects.component";
import { ContactComponent } from "./contact/contact.component";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, HomeComponent, SkillsComponent, MyProjectsComponent, ContactComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';
  currentYear:number;
  constructor(private toaster:ToastrService){
    this.currentYear=new Date().getFullYear();
  }
}
