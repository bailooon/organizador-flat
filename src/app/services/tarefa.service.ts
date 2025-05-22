import { Injectable } from '@angular/core';
import { Tarefa } from '../interfaces/Tarefas';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {

  private apiUrl = 'http://localhost:8080/tarefas';

  tarefas: Tarefa[] = []

  constructor(private http:HttpClient) {}

  listar() : Observable<Tarefa[]>{
    return this.http.get<Tarefa[]>(this.apiUrl)
  }

  listarById(id:number) : Observable<Tarefa[]>{
    return this.http.get<Tarefa[]>(`${this.apiUrl}/${id}`)
  }

  adicionar(tarefa:Tarefa){
    return this.http.post(this.apiUrl, tarefa)
  }

  atualizar(id: number, tarefa: Tarefa){
    return this.http.put(`${this.apiUrl}/${id}`, tarefa)
  }

  remover(id:number){
    return this.http.delete(`${this.apiUrl}/${id}`)
  }
}
