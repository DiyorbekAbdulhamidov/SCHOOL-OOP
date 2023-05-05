"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeacherService = void 0;
class TeacherService {
    constructor() {
        this.teachers = [];
        this.teacherId = 0;
    }
    create(...teachers) {
        for (let teacher of teachers) {
            for (let i = 0; i < this.teachers.length; i++) {
                if (this.teachers[i].getTeacherId() === teacher.getTeacherId()) {
                    throw new Error("Teacher already exists👌");
                }
            }
            this.teachers.push(teacher);
            teacher.setTeacherId(++this.teacherId);
        }
    }
    getAllteachers() {
        return this.teachers;
    }
    getTeacherByTeacherId(teacherId) {
        const teacher = this.teachers.find(teacher => teacher.getTeacherId() == teacherId);
        if (teacher)
            return teacher;
        else
            throw new Error("Teacher not found");
    }
}
exports.TeacherService = TeacherService;
