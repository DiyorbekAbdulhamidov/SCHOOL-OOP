import { Student } from "../../students/student/student";
import { StudentService } from "../../students/student.service/studentservice";
export class Group {
    private id: number = 0;
    constructor(public name: string, public schoolNum: number,public studentNum: number, public students: Student[] = []){}
    getId(){
        return this.id;
    }

    setId(id : number){
        this.id = id;
    }
}
// 