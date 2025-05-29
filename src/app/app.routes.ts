import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { TarefaComponent } from './components/tarefa/tarefa.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'tarefas', component: TarefaComponent },
];
