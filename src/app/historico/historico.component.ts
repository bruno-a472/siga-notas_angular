import { Component } from '@angular/core';
import { MateriaComponent } from '../materia/materia.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-historico',
  imports: [MateriaComponent, RouterLink],
  templateUrl: './historico.component.html',
  styleUrl: './historico.component.scss'
})
export class HistoricoComponent {

}
