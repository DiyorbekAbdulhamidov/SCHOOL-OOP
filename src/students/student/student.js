"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student = void 0;
class Student {
    constructor(fullName, phoneNumber, groupId, teacherId, schoolId) {
        this.fullName = fullName;
        this.phoneNumber = phoneNumber;
        this.groupId = groupId;
        this.teacherId = teacherId;
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
