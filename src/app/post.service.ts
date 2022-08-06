import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, concat, concatMap, delay, of, retryWhen, scan, take, throwError } from 'rxjs';

export interface Post{
  userId:number;
  id:number;
  title:string;
  body:string;
}

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private httpClient:HttpClient) { }

  getPosts()
  {
    return this.httpClient.get<Post[]>('https://jsonplaceholder.typicode.com/poasts').pipe(
      retryWhen((errors)=>
      // concat(
      //   errors.pipe(
      //     delay(2000),
      //     take(2)
      //   ),
      //   throwError("Max tries exceeded!")
      // )
      errors.pipe(
        concatMap((error,index)=>{
          console.log(index);
          if(index>2)
          {
            return throwError(()=>error);
          }
          else return of(error).pipe(delay(2000))
        })
      )
      )
      ,
      catchError((err)=>{console.log(err);return of([])})
    )
  }
}
