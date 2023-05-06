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
import { Fan } from "./teachers/teacher/teacher";


let teacherService = new TeacherService();
let studentService = new StudentService();
let schoolService = new SchoolService();
let predmetService = new PredmetService();
let gruppeService = new GroupService();

let teacher = new Teacher("Lola Azimova", 2, [12, 5, 73], "MATEMATIKA");
let student = new Student("Diyorbek Abdulhamdov", "900104240", "9-V", "Lola", 12);
let student2 = new Student("Fayzbek Abdulhamidov", "900362911", "9-D", "Azizaxon", 12);
let school = new School(12, "Angren Shahar", "PREZIDENT MAKTABI", []);
let predmet = new Predmet("MATEMATIKA", "Lola");
let group = new Group("9-V",12, 27);

studentService.create(student,student2);
teacherService.create(teacher);
schoolService.create(school);
predmetService.create(predmet);
gruppeService.create(group);

export class Main {
    getStudentBySchoolNum(num: number) {
      const students = studentService.getAllStudents().filter(student => student.schoolNum === num);
      if (students.length === 0) throw new Error("Student not found ❌");
      return students;
    };

    getTeacherBySchoolNum(num: number){
        const teachers = teacherService.getAllteachers().filter(teacher => teacher.schoolIds.includes(num));
        if(teachers.length === 0) throw new Error("Techer not found ❌");
        return teachers;
    }
    getStudentByGroup(gruopName:string){
        for(let student of studentService.getAllStudents()){
            if(gruopName === student.groupName){
                return student;
            }
            else throw new Error ("Student not found ❌");
        }
    }
    getTeacherByPredmet(fan : string){
        for(let teacher of teacherService.getAllteachers()){
            if(teacher.predmets === fan) return teacher;
            throw new Error("Teacher not found ❌");   
        }
    }  
    getSchoolByNum(schoolNum : number){
        for(let school of schoolService.getAllSchools()){
            if(school.schoolNumber === schoolNum) return school;
            throw new Error("School not found ❌");
        }
    }
    getPredmetByTeacher(teacherName:string){
        for(let predmet of predmetService.getAllPredmets()){
            if(predmet.teacherName.toLocaleLowerCase() === teacherName.toLocaleLowerCase()) return predmet;
            throw new Error("Predmet not found ❌");
        }
    }
}  