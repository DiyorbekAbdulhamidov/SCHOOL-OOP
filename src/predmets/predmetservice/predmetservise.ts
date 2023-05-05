import { Predmet } from "../predmet/predmet";

export class PredmetService{
    private predmets: Predmet[] = [];
    private id:number = 0;

    create(...predmets : Predmet[]){
        for(let predmet of predmets){
            for(let i = 0; i < this.predmets.length;i++){
                if(predmet.getPredId() == predmets[i].getPredId()){
                    throw new Error ("Predmet already exists 👌");
                }
            }
            this.predmets.push(predmet);
            predmet.setPredId(++this.id);        
        }
    }

    getAllPredmets(){
        return this.predmets;
    }

    getPredById(id: number){
        const predmet = this.predmets.find(pred => pred.getPredId() == id);
        if(predmet) return predmet;
        else throw new Error ("Predmet not found'❌"); 
    }
}