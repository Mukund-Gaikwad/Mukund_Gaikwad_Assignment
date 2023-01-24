import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Iuser} from '../model/users';

@Injectable({
  providedIn: 'root'
})
export class DataService {

   baseUrl = environment.postBaseUrl;
  constructor(private _http : HttpClient) { }

  getAllUsersData():Observable<Iuser[]>{
    return this._http.get<Iuser[]>(this.baseUrl).pipe(
      map((res : any)=>{ /* response is all array >> this map is rxjs map*/
        let arr: Iuser[]=[];
        let count : any ={}
        res.map((user:Iuser)=>{  /* this map is simple map operator */
            if(user.name in count){
              count[user.name] +=1
            }else{
              count[user.name]=1
            }
            arr.push({
              name : user.name,
              noOfAccurance : count[user.name]
            })
        });    
        return arr        
      }),
      
    );
    }
  }

