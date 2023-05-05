export class Group {
    private id: number = 0;
    constructor(public name: string, public schoolNum: number,public studentNum: number){}
    getId(){
        return this.id;
    }

    setId(id : number){
        this.id = id;
    }
}