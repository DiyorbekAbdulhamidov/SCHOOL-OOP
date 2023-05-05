import { Student } from "../student/student";

export class StudentService {
    private students: Student[] = [];
    private studentId: number = 0;


    create(...students: Student[]) {
        for (let student of students) {
            for (let i = 0; i < this.students.length; i++) {
                if (this.students[i].groupName == student.groupName) {
                    throw new Error(`Student ${student.groupName} already exists 🙌`);
                }
                if (this.students[i].getStudentId() === student.getStudentId()) {
                    throw new Error("Student already exists👌");
                }
            }
            this.students.push(student);
            student.setStudentId(++this.studentId);
        }
    }

    getAllStudents() {
        return this.students;
    }

    getStudentById(id: number) {
        const student = this.students.find(student => id === student.getStudentId());
        if (student) return student;
        else throw new Error("Student not found❌");
    }

    getSchoolNum() {
        for (const student of this.students) {
            return student.schoolNum;
        }
    }
}
