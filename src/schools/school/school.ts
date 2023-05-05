import { Student } from "../../students/student/student"
type ScholType = "UMUMIY MAKTAB" | "PREZIDENT MAKTABI" | "IXTISOSLASHTIRILGAN MAKTAB"
export class School{
    constructor(public schoolNumber: number, public address : string, public schoolType :ScholType, public students : Student[] = []){}
}