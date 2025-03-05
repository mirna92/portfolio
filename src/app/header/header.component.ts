import { Component, HostListener } from '@angular/core';
import { MatMenuModule } from "@angular/material/menu";
import { MatIconModule } from "@angular/material/icon";
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatMenuModule,MatIconModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isMobile:boolean=false;
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
