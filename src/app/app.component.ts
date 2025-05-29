import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TarefaComponent } from './components/tarefa/tarefa.component';
import { HomeComponent } from './components/home/home.component';
import { NavComponent } from './components/nav/nav.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TarefaComponent,HomeComponent, NavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'organizador-flat';
 
}
