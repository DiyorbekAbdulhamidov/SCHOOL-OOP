"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupService = void 0;
class GroupService {
    constructor() {
        this.id = 0;
        this.groups = [];
    }
    create(...groups) {
        for (let group of groups) {
            for (let i = 0; i < this.groups.length; i++) {
                if (group.getId() === this.groups[i].getId()) {
                    throw new Error("Group already exists👌");
                }
            }
            this.groups.push(group);
            group.setId(++this.id);
        }
    }
    getAllGroups() {
        return this.groups;
    }
    getGroupById(groupId) {
        const group = this.groups.find(g => g.getId() === groupId);
        if (group)
            return group;
        else
            throw new Error("Group not found ❌");
    }
}
exports.GroupService = GroupService;
