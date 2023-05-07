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
let teacher2 = new Teacher("Xilola Azimova", 2, [12, 5, 73], "MATEMATIKA");

let student = new Student("Diyorbek Abdulhamdov", "900104240", "9-V", "Lola", 12);
let student2 = new Student("Fayzbek Abdulhamidov", "900362911", "9-V", "Azizaxon", 12);
let school = new School(12, "Angren Shahar", "PREZIDENT MAKTABI","9-V",[]);
let predmet = new Predmet("MATEMATIKA", "Lola");
let predmet2 = new Predmet("ONA TILI", "Lola")
let group = new Group("11-V",12, 27,[]);
let group2 = new Group("10-B",12,30,[]);


studentService.create(student,student2);
teacherService.create(teacher,teacher2);
schoolService.create(school);
predmetService.create(predmet,predmet2);
gruppeService.create(group,group2);

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
    getStudentByGroup(gruopName: string) {
        for (let student of studentService.getAllStudents()) {
            if (gruopName === student.groupName) return student
        }
        throw new Error("Student not found ❌");
    }
    
    getTeacherByPredmet(fan : string){
        for(let teacher of teacherService.getAllteachers()){
            if(teacher.predmets === fan) return teacher;
        }
        throw new Error("Teacher not found ❌");   
    }  
    getSchoolByNum(schoolNum : number){
        for(let school of schoolService.getAllSchools()){
            if(school.schoolNumber === schoolNum) return school;
        }
        throw new Error("School not found ❌");
    }
    getPredmetByTeacher(teacherName:string){
        for(let predmett of predmetService.getAllPredmets()){
            if(predmett.teacherName.toLocaleLowerCase() === teacherName.toLocaleLowerCase()) return predmett;
        }
        throw new Error("Predmet not found ❌");
    }
    getGroupBySchoolNum(num : number){
        for(let groupp of gruppeService.getAllGroups()){
            if(groupp.schoolNum === num) return groupp;
        }
        throw new Error("Group not found ❌"); 
    }

    addStudenttoGroup(){
        for(let studentt of studentService.getAllStudents()){
            for(let groupp of gruppeService.getAllGroups()){
                if(studentt.groupName === groupp.name){
                    groupp.students.push(studentt);
                    console.log(groupp);
                }
            }
        }
    }
    addGroupToSchool(){
        for(let groupp of gruppeService.getAllGroups()){
            for(let schooll of schoolService.getAllSchools()){
                if(schooll.groupName !== groupp.name){
                    schooll.gropus.push(groupp);
                    console.log(schooll);
                }
                else throw new Error("Group not pushed to school ❌");
            }   
        }
    }
    getAllStudents(){
        return studentService.getAllStudents();
    }

    getAllGroups(){
        return gruppeService.getAllGroups();
    }

    getAllSchools(){
        return schoolService.getAllSchools();
    }
}  