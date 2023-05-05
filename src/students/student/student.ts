export class Student{
    constructor(public fullName : string, public phoneNumber : string, public groupName : string, public teacherName : string, public schoolNum : number){};
    private id: number = 0;

    getStudentId(){
        return this.id;
    }

    setStudentId(id : number){
        return this.id = id;
    }
}
