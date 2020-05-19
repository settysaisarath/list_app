import { Component, OnInit, OnChanges } from '@angular/core';
import { TestService } from './test.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,OnChanges {
  constructor(private service:TestService){}

  title1 = 'TodoApp';
  title='sample';
  todo:any=[];
msg:string
  ngOnInit()
  {
    this.service.getList().subscribe(data => 
      this.todo=data
      )
  }
  
   addTodo(newTodoLabel,prior):number{
     if(newTodoLabel == '' || prior == '')
     {
       return;
     }
     var newTodo = {
       label:newTodoLabel,
       priority:+prior,
       done:false
     };
     this.service.addToList(newTodo).subscribe((res:any) => {
       this.msg=res;
     })
     console.log("response from server :"+this.msg);
    //  var result= this.todo.push(newTodo);
    // console.log("result :"+result);
    // return result;
   }
   deleteTodo(newTodo){
     this.todo=this.todo.filter(t => t.label !== newTodo.label);

      this.service.deleteTodo(newTodo).subscribe((res:any) =>{
        this.msg=res;
        console.log("response from server :"+this.msg);
      })
      return this.todo.length;
   }     
   ngOnChanges(   )
   {

   }
}