import { School } from "../school/school";

export class SchoolService {
    private schools: School[] = [];
    private id: number = 0;

    create(...schools: School[]) {
        for (let school of schools) {
            for (let i = 0; i < this.schools.length; i++) {
                if (this.schools[i].getSchoolId() === school.getSchoolId()) {
                    throw new Error("School already exists👌");
                }
            }
            this.schools.push(school);
            school.setSchoolId(++this.id);
        }
    }

    getAllSchools() {
        return this.schools;
    }

    getSchoolNum() {
        for(let school of this.schools){
            return school.schoolNumber;
        }
    }
    
    

}

