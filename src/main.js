"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Main = void 0;
const student_1 = require("./students/student/student");
const studentservice_1 = require("./students/student.service/studentservice");
const teacher_1 = require("./teachers/teacher/teacher");
const teacherservice_1 = require("./teachers/teacherservice/teacherservice");
const school_1 = require("./schools/school/school");
const schoolservice_1 = require("./schools/school.service/schoolservice");
const predmet_1 = require("./predmets/predmet/predmet");
const predmetservise_1 = require("./predmets/predmetservice/predmetservise");
const group_1 = require("./gruops/groups/group");
const groupservice_1 = require("./gruops/groupsservice/groupservice");
let teacherService = new teacherservice_1.TeacherService();
let studentService = new studentservice_1.StudentService();
let schoolService = new schoolservice_1.SchoolService();
let predmetService = new predmetservise_1.PredmetService();
let gruppeService = new groupservice_1.GroupService();
let teacher = new teacher_1.Teacher("Lola Azimova", 2, [12, 5, 73], "MATEMATIKA");
let student = new student_1.Student("Diyorbek Abdulhamdov", "900104240", "9-V", "Lola", 12);
let student2 = new student_1.Student("Fayzbek Abdulhamidov", "900362911", "9-D", "Azizaxon", 12);
let school = new school_1.School(12, "Angren Shahar", "PREZIDENT MAKTABI", "9-v");
let predmet = new predmet_1.Predmet("MATEMATIKA", "Lola");
let group = new group_1.Group("9-V", 12, 27);
let group2 = new group_1.Group("9-V", 12, 30);
studentService.create(student, student2);
teacherService.create(teacher);
schoolService.create(school);
predmetService.create(predmet);
gruppeService.create(group, group2);
class Main {
    getStudentBySchoolNum(num) {
        const students = studentService.getAllStudents().filter(student => student.schoolNum === num);
        if (students.length === 0)
            throw new Error("Student not found ❌");
        return students;
    }
    ;
    getTeacherBySchoolNum(num) {
        const teachers = teacherService.getAllteachers().filter(teacher => teacher.schoolIds.includes(num));
        if (teachers.length === 0)
            throw new Error("Techer not found ❌");
        return teachers;
    }
    getStudentByGroup(gruopName) {
        for (let student of studentService.getAllStudents()) {
            if (gruopName === student.groupName) {
                return student;
            }
            else
                throw new Error("Student not found ❌");
        }
    }
    getTeacherByPredmet(fan) {
        for (let teacher of teacherService.getAllteachers()) {
            if (teacher.predmets === fan)
                return teacher;
            throw new Error("Teacher not found ❌");
        }
    }
    getSchoolByNum(schoolNum) {
        for (let school of schoolService.getAllSchools()) {
            if (school.schoolNumber === schoolNum)
                return school;
            throw new Error("School not found ❌");
        }
    }
    getPredmetByTeacher(teacherName) {
        for (let predmet of predmetService.getAllPredmets()) {
            if (predmet.teacherName.toLocaleLowerCase() === teacherName.toLocaleLowerCase())
                return predmet;
            throw new Error("Predmet not found ❌");
        }
    }
}
exports.Main = Main;
