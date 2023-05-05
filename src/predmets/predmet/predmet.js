"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Predmet = void 0;
class Predmet {
    getPredId() {
        return this.id;
    }
    setPredId(predId) {
        this.id = predId;
    }
    constructor(name, teacherName) {
        this.name = name;
        this.teacherName = teacherName;
        this.id = 0;
    }
}
exports.Predmet = Predmet;
