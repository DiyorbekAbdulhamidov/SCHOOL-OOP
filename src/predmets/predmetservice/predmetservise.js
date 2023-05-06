"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PredmetService = void 0;
var PredmetService = /** @class */ (function () {
    function PredmetService() {
        this.predmets = [];
        this.id = 0;
    }
    PredmetService.prototype.create = function () {
        var predmets = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            predmets[_i] = arguments[_i];
        }
        for (var _a = 0, predmets_1 = predmets; _a < predmets_1.length; _a++) {
            var predmet = predmets_1[_a];
            for (var i = 0; i < this.predmets.length; i++) {
                if (predmet.getPredId() == predmets[i].getPredId()) {
                    throw new Error("Predmet already exists 👌");
                }
            }
            this.predmets.push(predmet);
            predmet.setPredId(++this.id);
        }
    };
    PredmetService.prototype.getAllPredmets = function () {
        return this.predmets;
    };
    PredmetService.prototype.getPredById = function (id) {
        var predmet = this.predmets.find(function (pred) { return pred.getPredId() == id; });
        if (predmet)
            return predmet;
        else
            throw new Error("Predmet not found'❌");
    };
    return PredmetService;
}());
exports.PredmetService = PredmetService;
