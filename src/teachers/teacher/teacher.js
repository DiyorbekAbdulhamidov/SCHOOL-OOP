"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Teacher = void 0;
class Teacher {
    constructor(fullName, staj, schoolIds = [], predmets) {
        this.fullName = fullName;
        this.staj = staj;
        this.schoolIds = schoolIds;
        this.predmets = predmets;
        this.id = 0;
    }
    ;
    getTeacherId() {
        return this.id;
    }
    setTeacherId(teacherId) {
        this.id = teacherId;
    }
}
exports.Teacher = Teacher;
