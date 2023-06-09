import { Group } from "../../gruops/groups/group";
import { GroupService } from "../../gruops/groupsservice/groupservice";
type ScholType = "UMUMIY MAKTAB" | "PREZIDENT MAKTABI" | "IXTISOSLASHTIRILGAN MAKTAB"
export class School{
    constructor(public schoolNumber: number, public address : string, public schoolType :ScholType, public groupName : string, public gropus: Group[] = []){}

    private id: number = 0;

    getSchoolId(){
        return this.id;
    }

    setSchoolId(id: number){
        this.id = id;       
    }
}