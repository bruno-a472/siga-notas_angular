import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TesteComponent } from './teste/teste.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,  TesteComponent],
  templateUrl: './app.component.html',
  // template: `

  // `,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'siga-notas';
}
