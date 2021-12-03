import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Student } from './model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) { }
  addFile(name: File): Observable<any>{
    let formData: any = new FormData();
    formData.append('name', name);
    return this.http.post('http://localhost:8000/api/uploads', formData)
  }
}
