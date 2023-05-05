"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SchoolService = void 0;
class SchoolService {
    constructor() {
        this.schools = [];
        this.id = 0;
    }
    create(...schools) {
        for (let school of schools) {
            for (let i = 0; i < this.schools.length; i++) {
                if (this.schools[i].getSchoolId() === school.getSchoolId()) {
                    throw new Error("School already exists👌");
                }
            }
            this.schools.push(school);
            school.setSchoolId(++this.id);
        }
    }
    getAllSchools() {
        return this.schools;
    }
    getSchoolBySchoolId(id) {
        const school = this.schools.find(school => school.getSchoolId() === id);
        if (school)
            return school;
        else
            throw new Error("School not found ❌");
    }
}
exports.SchoolService = SchoolService;
