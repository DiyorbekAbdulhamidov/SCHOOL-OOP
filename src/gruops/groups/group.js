"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Group = void 0;
var Group = /** @class */ (function () {
    function Group(name, schoolNum, studentNum) {
        this.name = name;
        this.schoolNum = schoolNum;
        this.studentNum = studentNum;
        this.id = 0;
    }
    Group.prototype.getId = function () {
        return this.id;
    };
    Group.prototype.setId = function (id) {
        this.id = id;
    };
    return Group;
}());
exports.Group = Group;
