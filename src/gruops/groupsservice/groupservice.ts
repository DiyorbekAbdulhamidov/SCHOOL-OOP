import { Group } from "../groups/group";

export class GroupService{
    private id: number = 0;
    private groups: Group[] = [];
    
    create(...groups: Group[]){
        for(let group of groups){
            for(let i = 0; i < this.groups.length; i++){
                if(group.getId() === groups[i].getId()){
                    throw new Error("Group already exists👌")
                }
            }
            groups.push(group);
            group.setId(++this.id);
        }      
    }
    getAllGroups(){
        return this.groups;
    }
    getGroupById(groupId : number){
        const group = this.groups.find(g => g.getId() === groupId);
        if(group)return group;
        else throw new Error("Group not found ❌");
    }
}