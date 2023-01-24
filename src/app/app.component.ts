import { Component, OnInit } from '@angular/core';
import { Iuser} from './shared/model/users';
import { DataService } from './shared/sevvice/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  Users:Iuser[]=[];
  usersArray:Iuser[]=[];
  count!: number;
  constructor(private dataService:DataService){}
  
  ngOnInit(): void {
    this.getAllUsers()
  }

  getAllUsers(){
    this.dataService.getAllUsersData()
        .subscribe(res => {
          this.usersArray = Object.values(res.reduce((acc:any,curr:Iuser)=>{
            acc[curr.name] = curr
            return acc
          },{}))
          this.Users = this.usersArray
          console.log(this.usersArray)
        })
  }
 
}

// Task is:-
// 1 - take data from the any mock service with rxjs observable stream
// 2 - Have the distinct name in table
// 3 - Table will have 2 columns, one is for the name and another for the number of times it was duplicated
// 4 - mark the background of that row red if the duplicates are more than 0 and less 3
// 5 - mark row yellow if moe than 2 and less than 10
// 6 -Mark green if more than 10 timesr









// senwellhr01@gmail.com