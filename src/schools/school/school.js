"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.School = void 0;
var School = /** @class */ (function () {
    function School(schoolNumber, address, schoolType, groupName) {
        this.schoolNumber = schoolNumber;
        this.address = address;
        this.schoolType = schoolType;
        this.groupName = groupName;
        this.id = 0;
    }
    School.prototype.getSchoolId = function () {
        return this.id;
    };
    School.prototype.setSchoolId = function (id) {
        this.id = id;
    };
    return School;
}());
exports.School = School;
