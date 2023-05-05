import { Teacher } from "../teacher/teacher";

export class TeacherService{
    private teachers: Teacher[] = [];
    private teacherId: number = 0;


    create(...teachers: Teacher[]){
        for(let teacher of teachers){
            for(let i = 0; i < this.teachers.length; i++){
                if(this.teachers[i].getTeacherId() === teacher.getTeacherId()){
                    throw new Error("Teacher already exists👌");
                }
            }
            this.teachers.push(teacher);
            teacher.setTeacherId(++this.teacherId);
        }
    }

    getAllteachers(){
        return this.teachers;
    }

    getTeacherByTeacherId(teacherId: number){
        const teacher = this.teachers.find(teacher => teacher.getTeacherId() == teacherId);
        if(teacher) return teacher
        else throw new Error("Teacher not found ❌");
    }
}