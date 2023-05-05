"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.School = void 0;
class School {
    constructor(schoolNumber, address, schoolType, students = []) {
        this.schoolNumber = schoolNumber;
        this.address = address;
        this.schoolType = schoolType;
        this.students = students;
    }
}
exports.School = School;
