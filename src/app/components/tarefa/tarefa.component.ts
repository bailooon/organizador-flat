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
  tarefaIdEdicao: number | null = null
  darkMode = true

  constructor(private tarefaService: TarefaService, private formBuilder: FormBuilder){
    this.tarefaForm = formBuilder.group({
      descricao: ['', Validators.required],
      data: ['', Validators.required],
      hora: ['', Validators.required],
      responsavel: ['', Validators.required],
      concluida: [false],
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

  editar(tarefa: Tarefa): void {
  this.tarefaIdEdicao = tarefa.id;

  this.tarefaForm.patchValue({
    descricao: tarefa.descricao,
    data: tarefa.data,
    hora: tarefa.hora,
    responsavel: tarefa.responsavel,
    concluida: tarefa.concluida,
  });
}

salvar() {
    if (this.tarefaForm.valid) {
      const tarefa = this.tarefaForm.value as Tarefa;

      if (this.tarefaIdEdicao) {
    // PUT
      this.tarefaService.atualizar(this.tarefaIdEdicao, tarefa).subscribe(() => {
      this.listar(); 
      this.tarefaForm.reset();
      this.tarefaIdEdicao = null;
    });
  } else {
        // POST
         this.tarefaService.adicionar(tarefa).subscribe(() => {
      this.listar();
      this.tarefaForm.reset();
    });
      }

    } else {
      alert('Por favor preencher os campos obrigatórios')
    }
    this.tarefaForm.reset() // Limpar o form após o preenchimento
    this.listar();
  }

  remover(id: number): void{
    this.tarefaService.remover(id).subscribe(() => {
      this.listar()
    })
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
