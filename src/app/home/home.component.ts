import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  currentYear:number=new Date().getFullYear();
  birthday:number | undefined;

  ngOnInit(){
    this.birthday=this.currentYear-1992;
  }
}
