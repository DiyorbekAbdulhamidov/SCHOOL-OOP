export class Predmet {
    private id: number = 0;

    getPredId(){
        return this.id;
    }

    setPredId(predId: number){
        this.id = predId;
    }
    constructor(public name: string, public teacherName : string){}
    
}