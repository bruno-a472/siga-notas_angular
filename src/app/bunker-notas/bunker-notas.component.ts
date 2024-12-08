import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-bunker-notas',
  imports: [RouterOutlet],
  templateUrl: './bunker-notas.component.html',
  styleUrl: './bunker-notas.component.scss'
})
export class BunkerNotasComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  nome = '';

  constructor() {
    this.nome = this.route.snapshot.params['nome']
  }
}
