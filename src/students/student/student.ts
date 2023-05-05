export class Student{
    constructor(public fullName : string, public phoneNumber : string, public groupId : number, public teacherId : number, public schoolId : number){};
    private id: number = 0;

    getStudentId(){
        return this.id;
    }

    setStudentId(id : number){
        return this.id = id;
    }
}
