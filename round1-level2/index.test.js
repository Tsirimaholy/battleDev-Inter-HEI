import { expect } from "chai";
import {maxZeroSequence} from "./index.js";

describe("Zero max sum", () => {
    it("should return [1,2,-3]", () => {
        expect(maxZeroSequence([1, 2, -3, 7, 8, -16])).to.deep.equal([1, 2, -3]);
    })
    it("should return [92, -115, 17, 2, 2, 2]",() =>{
        expect(maxZeroSequence([25, -35, 12, 6, 92, -115, 17, 2, 2, 2, -7, 2, -9, 16, 2, -11])).to.deep.equal([92, -115, 17, 2, 2, 2]);
    })
});