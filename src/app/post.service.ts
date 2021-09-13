import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PostsComponent } from './components/posts/posts.component';
import { IPost } from './post';
@Injectable({
  providedIn: 'root'
})
@Injectable()
export class PostService {
  private _url: string = "https://jsonplaceholder.typicode.com/posts"
  // public url: string = "/assets/data/posts.json"
  constructor(private http: HttpClient) { }
  getPosts(): Observable<IPost[]>{
    return this.http.get<IPost[]>(this._url);
  }
  gePostId(id){
    return this.http.get(`${this._url}/${id}`)
  }
}
// getPosts(){
  // return this.httpClient
  // .get(`${this.host}/employees`)
  // .pipe(
  // map((employees: any[]): any => {
  //   return employees.map(employee => {
  //     return {
  //       id: employee.id,
  //       name: employee.employee_name,
  //       salary: employee.employee_salary,
  //       age: employee.employee_age
  //     }
  //   })
  // })
  // );
// }