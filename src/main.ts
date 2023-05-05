import { Student } from "./students/student/student";
import { StudentService } from "./students/student.service/studentservice";
import { Teacher } from "./teachers/teacher/teacher";
import { TeacherService } from "./teachers/teacherservice/teacherservice";

let teacherService = new TeacherService();
let studentService = new StudentService();

let teacher = new Teacher("Lola Azimova",2,[12,5,73],"MATEMATIKA");
let student = new Student("Diyorbek Abdulhamdov", "900104240","9-V","Lola Azimova",12);

teacherService.create(teacher);
studentService.create(student);

console.log(teacherService.getAllteachers());
console.log(studentService.getAllStudents());
