"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SchoolService = void 0;
var SchoolService = /** @class */ (function () {
    function SchoolService() {
        this.schools = [];
        this.id = 0;
    }
    SchoolService.prototype.create = function () {
        var schools = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            schools[_i] = arguments[_i];
        }
        for (var _a = 0, schools_1 = schools; _a < schools_1.length; _a++) {
            var school = schools_1[_a];
            for (var i = 0; i < this.schools.length; i++) {
                if (this.schools[i].getSchoolId() === school.getSchoolId()) {
                    throw new Error("School already exists👌");
                }
            }
            this.schools.push(school);
            school.setSchoolId(++this.id);
        }
    };
    SchoolService.prototype.getAllSchools = function () {
        return this.schools;
    };
    SchoolService.prototype.getSchoolBySchoolId = function (id) {
        var school = this.schools.find(function (school) { return school.getSchoolId() === id; });
        if (school)
            return school;
        else
            throw new Error("School not found ❌");
    };
    return SchoolService;
}());
exports.SchoolService = SchoolService;
