import { Component } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  
  constructor(private router: Router) {}
  
  trocar(){
    const a = ['Lucas', 'Fernando', 'Júlia', "Isabela", "Ferdinando", 'Cu', 'Daniel', 'Pipi'];
    const b = Math.floor(Math.random()*7);
    console.log('/'+a.at(b))
    this.router.navigate(['/'+a.at(b)+'/atual'])
  }
}
