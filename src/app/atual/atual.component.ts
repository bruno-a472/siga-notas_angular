import { Component } from '@angular/core';
import { MateriaComponent } from '../materia/materia.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-atual',
  imports: [MateriaComponent, RouterLink],
  templateUrl: './atual.component.html',
  styleUrl: './atual.component.scss'
})
export class AtualComponent {

}
