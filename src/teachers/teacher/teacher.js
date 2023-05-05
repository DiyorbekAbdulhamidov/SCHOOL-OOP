"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Teacher = void 0;
var Teacher = /** @class */ (function () {
    function Teacher(fullName, staj, schoolIds, predmets) {
        if (schoolIds === void 0) { schoolIds = []; }
        this.fullName = fullName;
        this.staj = staj;
        this.schoolIds = schoolIds;
        this.predmets = predmets;
        this.id = 0;
    }
    ;
    Teacher.prototype.getTeacherId = function () {
        return this.id;
    };
    Teacher.prototype.setTeacherId = function (teacherId) {
        this.id = teacherId;
    };
    return Teacher;
}());
exports.Teacher = Teacher;
