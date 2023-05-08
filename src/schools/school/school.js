"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.School = void 0;
class School {
    constructor(schoolNumber, address, schoolType, groupName, gropus = []) {
        this.schoolNumber = schoolNumber;
        this.address = address;
        this.schoolType = schoolType;
        this.groupName = groupName;
        this.gropus = gropus;
        this.id = 0;
    }
    getSchoolId() {
        return this.id;
    }
    setSchoolId(id) {
        this.id = id;
    }
}
exports.School = School;
