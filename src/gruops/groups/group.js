"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Group = void 0;
class Group {
    constructor(name, schoolNum, studentNum, students = []) {
        this.name = name;
        this.schoolNum = schoolNum;
        this.studentNum = studentNum;
        this.students = students;
        this.id = 0;
    }
    getId() {
        return this.id;
    }
    setId(id) {
        this.id = id;
    }
}
exports.Group = Group;
