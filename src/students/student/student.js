"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student = void 0;
class Student {
    constructor(fullName, phoneNumber, groupName, teacherName, schoolId) {
        this.fullName = fullName;
        this.phoneNumber = phoneNumber;
        this.groupName = groupName;
        this.teacherName = teacherName;
        this.schoolId = schoolId;
        this.id = 0;
    }
    ;
    getStudentId() {
        return this.id;
    }
    setStudentId(id) {
        return this.id = id;
    }
}
exports.Student = Student;
