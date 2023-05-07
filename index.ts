import { Main } from "./src/main";

let main = new Main();
main.addStudenttoGroup();
main.addGroupToSchool();
console.log(main.getStudentBySchoolNum(12));
console.log(main.getTeacherBySchoolNum(5));
console.log(main.getStudentByGroup("9-V"));
console.log(main.getTeacherByPredmet("MATEMATIKA"));
console.log(main.getSchoolByNum(12));
console.log(main.getPredmetByTeacher("Lola"));
console.log(main.getGroupBySchoolNum(12));
console.log(main.getAllStudents());
console.log(main.getAllGroups());
console.log(main.getAllSchools());

// async / await
// 