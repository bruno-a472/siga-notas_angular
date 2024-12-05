import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { TesteComponent } from './teste/teste.component';

export const routes: Routes = [

    {
        path: '',
        redirectTo: '/app',
        pathMatch: 'full'
    },
    {
        path: 'app',
        component: AppComponent,
        title: 'começo'
    },
    {
        path: 'app/teste',
        component: TesteComponent,
        title: 'teste'
    }
    

];
