import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DadosService } from '../dados.service';
import { NgIf } from '@angular/common';
import { EstudanteService } from '../estudante.service';


@Component({
  selector: 'app-login',
  imports: [NgIf],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  constructor(private router: Router,
              private dadosService: DadosService,
              private estudante: EstudanteService) {}
  visualizacao = false;

  nome = '' // Inicializando o nome
  id = 0 // Inicializando ID

  ngOnInit(): void {
    setTimeout(() => {
      this.visualizacao = true;
    }, 100);
  } // ngOnInit()

  iniciarLogin() {
    const login =  {
      usuario: (document.getElementsByClassName('login-usuario')[0] as HTMLInputElement).value,
      senha: (document.getElementsByClassName('login-senha')[0] as HTMLInputElement).value
      } // const login

    // Início requisição HTTP
    this.dadosService.enviarLogin(login).subscribe(resposta => {
      if (resposta['bool'] == false) {
              // Login falhou
      } // if
      else {
        this.router.navigate([`/${resposta['nome']}/atual`]);
        this.nome = resposta['nome'];
        this.estudante.defineId(resposta['id']);
      } // else
      
    }, // resposta =>
    erro => {
      console.error('Erro ao enviar dados:', erro);
    } // erro
  ); // subscribe()
  } // iniciarLogin()

}
