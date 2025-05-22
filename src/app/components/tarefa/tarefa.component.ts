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
  darkMode = true

  constructor(private tarefaService: TarefaService, private formBuilder: FormBuilder){
    this.tarefaForm = formBuilder.group({
      descricao: ['', Validators.required],
      data: ['', Validators.required],
      hora: ['', Validators.required],
      responsavel: ['', Validators.required],
      concluida: ['', Validators.required],
    })
    this.darkMode = localStorage.getItem('theme') === 'dark';
    this.applyTheme();
  }

  listar(): void {
    this.tarefaService.listar().subscribe((resposta) => (this.tarefas = resposta))
  }

  ngOnInit(): void{
    this.listar()
  }

   

  toggleTheme(): void {
    this.darkMode = !this.darkMode;
    localStorage.setItem('theme', this.darkMode ? 'dark' : 'light');
    this.applyTheme();
  }

  applyTheme(): void {
    document.body.classList.remove('light-mode', 'dark-mode');
    document.body.classList.add(this.darkMode ? 'dark-mode' : 'light-mode');
  }


}
