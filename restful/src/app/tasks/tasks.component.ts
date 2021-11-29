import { Component, OnInit } from '@angular/core';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  title:string = "";
  allTasks:any[] = [];
  task:any = {};

  constructor(private _httpService: TasksService) { }
  ngOnInit(): void {
  }

  getTasks(): void{
    this.allTasks = this._httpService.tasks;
    console.log(this.allTasks);
  }

  findTask(event:any):void{
    event.preventDefault();
    this.title = event.target.title.value;
    this._httpService.selectTask(this.title)
    .subscribe((data:any) =>{
      this.task = data;
    });
    console.log(this.task);
  }

}
