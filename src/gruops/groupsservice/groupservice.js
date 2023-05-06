"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupService = void 0;
var schoolservice_1 = require("../../schools/school.service/schoolservice");
var schoolService = new schoolservice_1.SchoolService();
var GroupService = /** @class */ (function () {
    function GroupService() {
        this.id = 0;
        this.groups = [];
    }
    GroupService.prototype.create = function () {
        var groups = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            groups[_i] = arguments[_i];
        }
        for (var _a = 0, groups_1 = groups; _a < groups_1.length; _a++) {
            var group = groups_1[_a];
            for (var i = 0; i < this.groups.length; i++) {
                for (var _b = 0, _c = schoolService.getAllSchools(); _b < _c.length; _b++) {
                    var school = _c[_b];
                    if (group.name === school.groupName)
                        throw new Error("This group has school ❌");
                }
                if (group.getId() === this.groups[i].getId()) {
                    throw new Error("Group already exists👌");
                }
            }
            this.groups.push(group);
            group.setId(++this.id);
        }
    };
    GroupService.prototype.getAllGroups = function () {
        return this.groups;
    };
    GroupService.prototype.getGroupById = function (groupId) {
        var group = this.groups.find(function (g) { return g.getId() === groupId; });
        if (group)
            return group;
        else
            throw new Error("Group not found ❌");
    };
    return GroupService;
}());
exports.GroupService = GroupService;
