import { Component, HostListener } from '@angular/core';
import { MatMenuModule } from "@angular/material/menu";
import { CommonModule } from '@angular/common';
import { MatIconModule } from "@angular/material/icon";
@Component({
    selector: 'app-header',
    imports: [MatMenuModule, MatIconModule, CommonModule],
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isMobile:boolean=false;
  mediaLinks = [
    {
      src: "assets/img/facebook.svg",
      href: "https://www.facebook.com/mirna.syrian.79/",
      alt: "facebook svg",
    },
    {
      src: "assets/img/email.svg",
      href: "mailto:mirnasliman92@gmail.com",
      alt: "email svg",
    },
    {
      src: "assets/img/linkedin.svg",
      href: "https://www.linkedin.com/in/mirna-sulaiman-55a990210/",
      alt: "linkIn svg",
    },
  ];
  @HostListener("window:resize") onWindowResize() {
    this.checkWindowWidth();
  }

  checkWindowWidth = () => {
    if (window.innerWidth <= 768) {
      this.isMobile = true;
    } else {
      this.isMobile = false;
    }
  };
}
