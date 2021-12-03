import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';
import {MatProgressBarModule} from '@angular/material/progress-bar';

import { StudentListComponent } from './student-list/student-list.component';
import { StudentComponent } from './student/student.component';


@NgModule({
  declarations: [
    StudentComponent,
    StudentListComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatSliderModule,
    MatProgressBarModule,
  ]
})
export class StudentModule { }
