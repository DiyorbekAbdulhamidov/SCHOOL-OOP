"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Predmet = void 0;
var Predmet = /** @class */ (function () {
    function Predmet(name, teacherName) {
        this.name = name;
        this.teacherName = teacherName;
        this.id = 0;
    }
    Predmet.prototype.getPredId = function () {
        return this.id;
    };
    Predmet.prototype.setPredId = function (predId) {
        this.id = predId;
    };
    return Predmet;
}());
exports.Predmet = Predmet;
