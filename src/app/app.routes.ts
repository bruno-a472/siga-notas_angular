import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { TesteComponent } from './teste/teste.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [

    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    {
        path: 'app',
        component: AppComponent,
        title: 'começo'
    },
    {
        path: 'login',
        component: LoginComponent,
        title: 'Login'
    }
    

];
