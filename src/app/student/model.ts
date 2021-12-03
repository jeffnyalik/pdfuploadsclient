export class Student {
  id: Number;
  name: string;
  enrolNumber: Number;
  school: string;
  course: string;

  constructor(id:Number, name:string, enrolNumber:Number, school:string, course:string){
    this.id = id;
    this.name = name;
    this.school = school;
    this.enrolNumber = enrolNumber;
    this.course = course
  }

}
