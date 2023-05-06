import { Group } from "../groups/group";
import { SchoolService } from "../../schools/school.service/schoolservice";

let schoolService = new SchoolService();

export class GroupService {
    private id: number = 0;
    private groups: Group[] = [];

    create(...groups: Group[]) {
        for (let group of groups) {
            for (let i = 0; i < this.groups.length; i++) {
                if (group.getId() === this.groups[i].getId()) {
                    throw new Error("Group already exists👌")
                }
            }
            this.groups.push(group);
            group.setId(++this.id);
        }
    }

    getAllGroups() {
        return this.groups;
    }

    getGroupById(groupId: number) {
        const group = this.groups.find(g => g.getId() === groupId);
        if (group) return group;
        else throw new Error("Group not found ❌");
    }
}