"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Main = void 0;
var student_1 = require("./students/student/student");
var studentservice_1 = require("./students/student.service/studentservice");
var teacher_1 = require("./teachers/teacher/teacher");
var teacherservice_1 = require("./teachers/teacherservice/teacherservice");
var school_1 = require("./schools/school/school");
var schoolservice_1 = require("./schools/school.service/schoolservice");
var predmet_1 = require("./predmets/predmet/predmet");
var predmetservise_1 = require("./predmets/predmetservice/predmetservise");
var group_1 = require("./gruops/groups/group");
var groupservice_1 = require("./gruops/groupsservice/groupservice");
var teacherService = new teacherservice_1.TeacherService();
var studentService = new studentservice_1.StudentService();
var schoolService = new schoolservice_1.SchoolService();
var predmetService = new predmetservise_1.PredmetService();
var gruppeService = new groupservice_1.GroupService();
var teacher = new teacher_1.Teacher("Lola Azimova", 2, [12, 5, 73], "MATEMATIKA");
var teacher2 = new teacher_1.Teacher("Xilola Azimova", 2, [12, 5, 73], "MATEMATIKA");
var student = new student_1.Student("Diyorbek Abdulhamdov", "900104240", "9-V", "Lola", 12);
var student2 = new student_1.Student("Fayzbek Abdulhamidov", "900362911", "9-V", "Azizaxon", 12);
var school = new school_1.School(12, "Angren Shahar", "PREZIDENT MAKTABI", "9-V", []);
var predmet = new predmet_1.Predmet("MATEMATIKA", "Lola");
var predmet2 = new predmet_1.Predmet("ONA TILI", "Lola");
var group = new group_1.Group("11-V", 12, 27, []);
var group2 = new group_1.Group("10-B", 12, 30, []);
studentService.create(student, student2);
teacherService.create(teacher, teacher2);
schoolService.create(school);
predmetService.create(predmet, predmet2);
gruppeService.create(group, group2);
var Main = /** @class */ (function () {
    function Main() {
    }
    Main.prototype.getStudentBySchoolNum = function (num) {
        var students = studentService.getAllStudents().filter(function (student) { return student.schoolNum === num; });
        if (students.length === 0)
            throw new Error("Student not found ❌");
        return students;
    };
    ;
    Main.prototype.getTeacherBySchoolNum = function (num) {
        var teachers = teacherService.getAllteachers().filter(function (teacher) { return teacher.schoolIds.includes(num); });
        if (teachers.length === 0)
            throw new Error("Techer not found ❌");
        return teachers;
    };
    Main.prototype.getStudentByGroup = function (gruopName) {
        for (var _i = 0, _a = studentService.getAllStudents(); _i < _a.length; _i++) {
            var student_2 = _a[_i];
            if (gruopName === student_2.groupName)
                return student_2;
        }
        throw new Error("Student not found ❌");
    };
    Main.prototype.getTeacherByPredmet = function (fan) {
        for (var _i = 0, _a = teacherService.getAllteachers(); _i < _a.length; _i++) {
            var teacher_2 = _a[_i];
            if (teacher_2.predmets === fan)
                return teacher_2;
        }
        throw new Error("Teacher not found ❌");
    };
    Main.prototype.getSchoolByNum = function (schoolNum) {
        for (var _i = 0, _a = schoolService.getAllSchools(); _i < _a.length; _i++) {
            var school_2 = _a[_i];
            if (school_2.schoolNumber === schoolNum)
                return school_2;
        }
        throw new Error("School not found ❌");
    };
    Main.prototype.getPredmetByTeacher = function (teacherName) {
        for (var _i = 0, _a = predmetService.getAllPredmets(); _i < _a.length; _i++) {
            var predmett = _a[_i];
            if (predmett.teacherName.toLocaleLowerCase() === teacherName.toLocaleLowerCase())
                return predmett;
        }
        throw new Error("Predmet not found ❌");
    };
    Main.prototype.getGroupBySchoolNum = function (num) {
        for (var _i = 0, _a = gruppeService.getAllGroups(); _i < _a.length; _i++) {
            var groupp = _a[_i];
            if (groupp.schoolNum === num)
                return groupp;
        }
        throw new Error("Group not found ❌");
    };
    Main.prototype.addStudenttoGroup = function () {
        for (var _i = 0, _a = studentService.getAllStudents(); _i < _a.length; _i++) {
            var studentt = _a[_i];
            for (var _b = 0, _c = gruppeService.getAllGroups(); _b < _c.length; _b++) {
                var groupp = _c[_b];
                if (studentt.groupName === groupp.name) {
                    groupp.students.push(studentt);
                    console.log(groupp);
                }
            }
        }
    };
    Main.prototype.addGroupToSchool = function () {
        for (var _i = 0, _a = gruppeService.getAllGroups(); _i < _a.length; _i++) {
            var groupp = _a[_i];
            for (var _b = 0, _c = schoolService.getAllSchools(); _b < _c.length; _b++) {
                var schooll = _c[_b];
                if (schooll.groupName !== groupp.name) {
                    schooll.gropus.push(groupp);
                    console.log(schooll);
                }
                else
                    throw new Error("Group not pushed to school ❌");
            }
        }
    };
    Main.prototype.getAllStudents = function () {
        return studentService.getAllStudents();
    };
    Main.prototype.getAllGroups = function () {
        return gruppeService.getAllGroups();
    };
    Main.prototype.getAllSchools = function () {
        return schoolService.getAllSchools();
    };
    return Main;
}());
exports.Main = Main;
