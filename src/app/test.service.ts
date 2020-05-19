import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable, from } from 'rxjs';
import {Todo} from './todo'

@Injectable({
  providedIn: 'root'
})
export class TestService {

private  url:string="/assets/data/list.json";

  constructor(private http:HttpClient) { }

  getList():Observable<Todo>
  {
   return this.http.get<Todo>("http://localhost:8080/todo/get");
  }

  addToList(todoList)
  {
    const data={
      label:todoList.label,
      priority : todoList.priority,
       done : todoList.done
    }
console.log(data)
console.log("endpoint reached")
return this.http.post<Todo>('http://localhost:8080/todo/insert',data,{
headers: new HttpHeaders({
  'Content-Type' : 'application/json'
})
 })
 console.log("hello");
  }

  deleteTodo(newTodo)
  {
    console.log(newTodo.label);
  return  this.http.delete(`http://localhost:8080/todo/delete/${newTodo.label}`); 
  }

}
