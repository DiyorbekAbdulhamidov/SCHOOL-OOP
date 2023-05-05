import { Student } from "./students/student/student";
import { StudentService } from "./students/student.service/studentservice";
import { Teacher } from "./teachers/teacher/teacher";
import { TeacherService } from "./teachers/teacherservice/teacherservice";
import { School } from "./schools/school/school";
import { SchoolService } from "./schools/school.service/schoolservice";   
import { Predmet } from "./predmets/predmet/predmet";
import { PredmetService } from "./predmets/predmetservice/predmetservise";
import { Group } from "./gruops/groups/group";
import { GroupService } from "./gruops/groupsservice/groupservice";

let teacherService = new TeacherService();
let studentService = new StudentService();
let schoolService = new SchoolService();
let predmetService = new PredmetService();
let gruppeService = new GroupService();

let teacher = new Teacher("Lola Azimova",2,[12,5,73],"MATEMATIKA");
let student = new Student("Diyorbek Abdulhamdov", "900104240","9-V","Lola Azimova",12);
let school = new School(12,"Angren Shahar","PREZIDENT MAKTABI", [student]);
let predmet = new Predmet("Matematika","Lola Azimova");
let group = new Group("9-V",12,27);

teacherService.create(teacher);
studentService.create(student);
schoolService.create(school);
predmetService.create(predmet);
gruppeService.create(group);

console.log(teacherService.getAllteachers());
console.log(studentService.getAllStudents());
console.log(schoolService.getAllSchools());
console.log(predmetService.getAllPredmets());
console.log(gruppeService.getAllGroups());