import {assert} from "chai";
import {dirReduc} from "./index.js";

describe("Direction in tana be like...", function () {
    it("should return ['OUEST']", function () {
        assert.deepEqual(dirReduc(["NORD", "SUD", "SUD", "EST", "OUEST", "NORD", "OUEST"]), ["OUEST"]);
    });
    it("should return an empty array", function () {
        assert.deepEqual(dirReduc(["NORD", "SUD", "SUD", "EST", "OUEST", "NORD"]), []);
    });
    it("should return ['NORD']", function () {
        assert.deepEqual(dirReduc(["NORD", "SUD", "SUD", "EST", "OUEST", "NORD", "NORD"]), ["NORD"]);
    });
    it("should return ['EST','NORD']", function () {
        assert.deepEqual(dirReduc(["EST", "EST", "OUEST", "NORD", "OUEST", "EST", "EST", "SUD", "NORD", "OUEST"]), ["EST", "NORD"]);
    });
    it("should return ['NORD','EST']", function () {
        assert.deepEqual(dirReduc(["NORD", "EST", "NORD", "EST", "OUEST", "OUEST", "EST", "EST", "OUEST", "SUD"]), ["NORD", "EST"]);
    });
    it("should return ['NORD', 'OUEST', 'SUD', 'EST']", function () {
        assert.deepEqual(dirReduc(["NORD", "OUEST", "SUD", "EST"]), ["NORD", "OUEST", "SUD", "EST"]);
    });
    it("should return ['NORD','EST']", function () {
        assert.deepEqual(dirReduc(["OUEST", "EST", "SUD", "NORD", "NORD", "EST", "OUEST", "EST", "NORD", "SUD"]), ['NORD', 'EST']);
    });
});