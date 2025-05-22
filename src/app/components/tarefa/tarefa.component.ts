import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Tarefa } from '../../interfaces/Tarefas';
import { TarefaService } from '../../services/tarefa.service';

@Component({
  selector: 'app-tarefa',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './tarefa.component.html',
  styleUrl: './tarefa.component.css'
})
export class TarefaComponent {
  tarefaForm: FormGroup = new FormGroup({})
  tarefas: Tarefa[] = []
  tarefaIdEdicao: string | null = null

  constructor(private tarefaService: TarefaService, private formBuilder: FormBuilder){
    this.tarefaForm = formBuilder.group({
      descricao: ['', Validators.required],
      data: ['', Validators.required],
      hora: ['', Validators.required],
      responsavel: ['', Validators.required],
      concluida: ['', Validators.required],
    })
  }

  listar(): void {
    this.tarefaService.listar().subscribe((resposta) => (this.tarefas = resposta))
  }

  ngOnInit(): void{
    this.listar()
  }


}
