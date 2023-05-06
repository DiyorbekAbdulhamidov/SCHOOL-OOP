"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeacherService = void 0;
var TeacherService = /** @class */ (function () {
    function TeacherService() {
        this.teachers = [];
        this.teacherId = 0;
    }
    TeacherService.prototype.create = function () {
        var teachers = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            teachers[_i] = arguments[_i];
        }
        for (var _a = 0, teachers_1 = teachers; _a < teachers_1.length; _a++) {
            var teacher = teachers_1[_a];
            for (var i = 0; i < this.teachers.length; i++) {
                if (this.teachers[i].getTeacherId() === teacher.getTeacherId()) {
                    throw new Error("Teacher already exists👌");
                }
            }
            this.teachers.push(teacher);
            teacher.setTeacherId(++this.teacherId);
        }
    };
    TeacherService.prototype.getAllteachers = function () {
        return this.teachers;
    };
    TeacherService.prototype.getTeacherByTeacherId = function (teacherId) {
        var teacher = this.teachers.find(function (teacher) { return teacher.getTeacherId() == teacherId; });
        if (teacher)
            return teacher;
        else
            throw new Error("Teacher not found ❌");
    };
    return TeacherService;
}());
exports.TeacherService = TeacherService;
