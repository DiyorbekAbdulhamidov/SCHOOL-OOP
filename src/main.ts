import { Student } from "./students/student/student";
import { StudentService } from "./students/student.service/studentservice";

let student = new Student("Diyorbek Abdulhamidov", "900104240", 9,1,12);
let student1 = new Student("Diyorbek Parpiyev", "900104240",12,12,12);
let studentService = new StudentService;

studentService.create(student,student1);

console.log(studentService.getAllStudents());
console.log(studentService.getStudentById(1));

