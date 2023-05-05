"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.School = void 0;
class School {
    getSchoolId() {
        return this.id;
    }
    setSchoolId(id) {
        this.id = id;
    }
    constructor(schoolNumber, address, schoolType, students = []) {
        this.schoolNumber = schoolNumber;
        this.address = address;
        this.schoolType = schoolType;
        this.students = students;
        this.id = 0;
    }
}
exports.School = School;
