import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
 skills=[{name:'Angular',describe:'Angular'},
  {name:'Typescript',describe:'Typescript'},
  {name:'Taillwind',describe:'Taillwind'},
  {name:'Angular',describe:'Angular Material UI'},
  {name:'Bootstrap',describe:'Bootstrap'},
  // {name:'PrimeNG',describe:'PrimeNG'},
  {name:'Scss',describe:'Scss'},
  {name:'CSS',describe:'CSS'},
  {name:'HTML',describe:'HTML'},
  {name:'oracle',describe:'Oracle DataBase Developer'},
  {name:'postgres',describe:'Postgresql'},
  {name:'mongodb',describe:'MongoDB'},
  {name:'Git',describe:'Git'},
  {name:'GitHub',describe:'GitHub'},
  // {name:'JasperServer Reporter',describe:'JasperServer Reporter'}
]
}
