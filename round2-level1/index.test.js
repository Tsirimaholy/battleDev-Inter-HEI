import {assert} from "chai";
import {spongeMeme} from "./index.js";

describe("Spongebob meme tester", () => {
    it("should produce the meme : StOp mAkInG SpOnGeBoB MeMeS!", function () {
        assert.equal(
            spongeMeme("stop Making spongebob Memes!"), 'StOp mAkInG SpOnGeBoB MeMeS!');
    });

    it("should produce the meme : CoLoReD TeEnS CaNt bE SuCcEsSfUl iN TeCh", function () {
        assert.equal(spongeMeme("colored teens cant Be successful in tech"), 'CoLoReD TeEnS CaNt bE SuCcEsSfUl iN TeCh');
    });
});