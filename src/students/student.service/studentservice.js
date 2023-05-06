"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentService = void 0;
var StudentService = /** @class */ (function () {
    function StudentService() {
        this.students = [];
        this.studentId = 0;
    }
    StudentService.prototype.create = function () {
        var students = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            students[_i] = arguments[_i];
        }
        for (var _a = 0, students_1 = students; _a < students_1.length; _a++) {
            var student = students_1[_a];
            for (var i = 0; i < this.students.length; i++) {
                if (this.students[i].getStudentId() === student.getStudentId()) {
                    throw new Error("Student already exists👌");
                }
            }
            this.students.push(student);
            student.setStudentId(++this.studentId);
        }
    };
    StudentService.prototype.getAllStudents = function () {
        return this.students;
    };
    StudentService.prototype.getStudentById = function (id) {
        var student = this.students.find(function (student) { return id === student.getStudentId(); });
        if (student)
            return student;
        else
            throw new Error("Student not found❌");
    };
    StudentService.prototype.getSchoolNum = function () {
        for (var _i = 0, _a = this.students; _i < _a.length; _i++) {
            var student = _a[_i];
            return student.schoolNum;
        }
    };
    return StudentService;
}());
exports.StudentService = StudentService;
