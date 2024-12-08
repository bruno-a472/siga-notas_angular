import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { TesteComponent } from './teste/teste.component';
import { LoginComponent } from './login/login.component';
import { BunkerNotasComponent } from './bunker-notas/bunker-notas.component';
import { HistoricoComponent } from './historico/historico.component';
import { AtualComponent } from './atual/atual.component';

export const routes: Routes = [

    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent,
        title: 'Login'
    },
    {
        path: ':nome',
        component: BunkerNotasComponent,
        title: 'Lucas',
        children: [
            {
                path: 'atual',
                component: AtualComponent,
                title: 'Atual'
            },
            {
                path: 'historico',
                component: HistoricoComponent,
                title: 'Historico'
            }
        ]
    },
    
    

];
