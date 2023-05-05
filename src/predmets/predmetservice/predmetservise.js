"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PredmetService = void 0;
class PredmetService {
    constructor() {
        this.predmets = [];
        this.id = 0;
    }
    create(...predmets) {
        for (let predmet of predmets) {
            for (let i = 0; i < this.predmets.length; i++) {
                if (predmet.getPredId() == predmets[i].getPredId()) {
                    throw new Error("Predmet already exists 👌");
                }
            }
            predmets.push(predmet);
            predmet.setPredId(++this.id);
        }
    }
    getAllPredmets() {
        return this.predmets;
    }
    getPredById(id) {
        const predmet = this.predmets.find(pred => pred.getPredId() == id);
        if (predmet)
            return predmet;
        else
            throw new Error("Predmet not found'❌");
    }
}
exports.PredmetService = PredmetService;
