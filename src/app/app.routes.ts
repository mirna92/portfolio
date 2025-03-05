import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { SkillsComponent } from './skills/skills.component';
import { MyProjectsComponent } from './my-projects/my-projects.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes =  [{ path: '', component: HomeComponent },
    { path: 'skills', component: SkillsComponent }, 
    { path: 'projects', component: MyProjectsComponent }, 
    { path: 'contact', component: ContactComponent }, 
    { path: 'about', component:HomeComponent  }
];
