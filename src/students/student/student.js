"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student = void 0;
var Student = /** @class */ (function () {
    function Student(fullName, phoneNumber, groupName, teacherName, schoolNum) {
        this.fullName = fullName;
        this.phoneNumber = phoneNumber;
        this.groupName = groupName;
        this.teacherName = teacherName;
        this.schoolNum = schoolNum;
        this.id = 0;
    }
    ;
    Student.prototype.getStudentId = function () {
        return this.id;
    };
    Student.prototype.setStudentId = function (id) {
        return this.id = id;
    };
    return Student;
}());
exports.Student = Student;
