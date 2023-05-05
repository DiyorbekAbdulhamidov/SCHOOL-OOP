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
let student = new student_1.Student("Diyorbek Abdulhamdov", "900104240", "9-V", "Lola Azimova", 12);
let student2 = new student_1.Student("Fayzbek Abdulhamidov", "900362911", "11-B", "Azizaxon", 12);
let school = new school_1.School(12, "Angren Shahar", "PREZIDENT MAKTABI", []);
let predmet = new predmet_1.Predmet("Matematika", "Lola Azimova");
let group = new group_1.Group("9-V", 12, 27);
studentService.create(student, student2);
schoolService.create(school);
class Main {
    getStudentBySchoolNum(num) {
        if (num === schoolService.getSchoolNum() && schoolService.getSchoolNum() === studentService.getSchoolNum()) {
            return studentService.getAllStudents();
        }
        else
            throw new Error("Student not found ❌");
    } //xato shundaki sikl faqat bir marta aylanyapti va faqat studenni tekshiryapti studen2 esa o`z holicha qolib ketpati
}
exports.Main = Main;
