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
  mediaLinks = [
    {
      src: "assets/img/facebook.svg",
      href: "https://www.facebook.com/mirna.syrian.79/",
      alt: "facebook svg",
    },
    {
      src: "assets/img/email.svg",
      href: "mailto:mirnasliman1992@gmail.com",
      alt: "email svg",
    },
    {
      src: "assets/img/linkedin.svg",
      href: "",
      alt: "linkIn svg",
    },
  ];
  ngOnInit(){
    this.birthday=this.currentYear-1992;
  }
}
