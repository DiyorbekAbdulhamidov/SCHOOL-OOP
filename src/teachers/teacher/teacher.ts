export type Fan = "MATEMATIKA" | "ONA TILI" | "INGLIZ TILI" | "RUS TILI"
export class Teacher{
    private id : number = 0;
    constructor(public fullName : string, public staj : number, public schoolIds: number[] = [], public predmets : Fan){};
    
    getTeacherId(){
        return this.id
    }

    setTeacherId(teacherId: number){
        this.id = teacherId;
    }
}