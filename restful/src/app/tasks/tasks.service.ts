import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TasksComponent } from './tasks.component';


@Injectable({
  providedIn: 'root'
})
export class TasksService {

  tasks: any[] = [];
  task:Object = {};

  constructor(private _http: HttpClient) { 
    this.fetchTasks();
  }

  fetchTasks(): void{
    this._http.get( "http://localhost:8080/tasks" )
    .subscribe((data:any)=>{
      this.tasks = data;
      console.log("This will get all the tasks");
      console.log(data);
      
    });
  }

  selectTask( title:string ){
    return this._http.get(`http://localhost:8080/tasks/${title}`)
  }
}
