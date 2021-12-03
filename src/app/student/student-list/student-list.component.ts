import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';

import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  progress: Boolean = false;
  public message: string ='';
  @Output() public onUploadFinished = new EventEmitter();
  
  constructor(private http: HttpClient,
    private fb: FormBuilder,
    private uploadService: StudentService
    ) {}

  public uploadFile = (files:any) =>{
    if(files.length == 0){
      console.log(files);
      return;
    }
    let fileToUpload = <File>files[0];
    let formData:any = new FormData();
    formData.append('name', fileToUpload, fileToUpload.name);
    console.log(fileToUpload);
    this.progress = true;
    setTimeout(() => {
      this.message = 'File uploaded successfully';
      this.progress = false;
    }, 3000);
  }

  public submitDoc = (files:any) =>{
    let fileToUpload = <File>files[0];
    let formData:any = new FormData();
    formData.append('name', fileToUpload, fileToUpload.name);
    this.http.post('http://localhost:8000/api/uploads', formData).subscribe((data)=>{
      console.log(data);
      console.log('FILE UPLOADED TO THE DATABASE');
      
    }, error=>console.log(error))
    
  }

  ngOnInit(): void {
    this.http.get('http://localhost:8000/api/uploads').subscribe((data) =>{
      console.log(data);
    }, error=>{console.log(error)})
  }

}
