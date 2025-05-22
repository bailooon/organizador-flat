import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Tarefa } from '../../interfaces/Tarefas';

@Component({
  selector: 'app-tarefa',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './tarefa.component.html',
  styleUrl: './tarefa.component.css'
})
export class TarefaComponent {
  tarefaForm: FormGroup = new FormGroup({})
  tarefas: Tarefa[] = []
  tarefaIdEdicao: string | null = null


}
