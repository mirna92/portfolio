import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
    selector: 'app-my-projects',
    imports: [CommonModule],
    templateUrl: './my-projects.component.html',
    styleUrl: './my-projects.component.scss'
})
export class MyProjectsComponent {
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
ngOninit(){

}
}
