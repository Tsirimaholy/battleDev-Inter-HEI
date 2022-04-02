import {assert} from "chai";
import {subsequence} from "./index.js";

describe("Subsequence of strings", function () {
    it("should return OK with : abb & ababa", function () {
        assert.equal(subsequence("abb", "ababa"), "OK")
    });
    it("should return NOK 2 with : abb & acba", function () {
        assert.equal(
            subsequence("abb", "acba"), "NOK 2")
    });
    it("should return OK with : a & a", function () {
        assert.equal(subsequence("a", "a"), "OK");
    });
    it("should return OK with : bihfd and a very long gibberish string", function () {
        assert.equal(
            subsequence("bihfd", "yefzjbjahxghbbvhwxjvvjyvevwbfdgeixddyxefvvxwxidifxebhcwxyizexfifcxjbvygfjdbgxeacceevgahfjgjgxcxazgbj")
            , "OK"
        )
    });
    it("should return NOK 6 with two gibberish inputs", function () {
        assert.equal(
            subsequence(
                "cfijahiefcihbbbehfcd", "dxiyxhadiezxwvjxfgcxjyixbvcwdgaheigcbhfjwfghabefhhdcfxzhicdwjdeywvbxchhyxyfxajdibhvhevzyydvhgzgdjhbw"
            ), "NOK 6")
    })
    it("should return NOK 8 with two gibberish inputs", function () {
        assert.equal(subsequence("vghifagfhjajeidhedgdgciacccjidhhvdfeebvbavvehdabgh", "gcyecbhgydwizvygceibfiaezwjazdvggivjjcaigxcgiayvehwvbxaajjbixwzeevyzyzhewjwfvjazbwvdjvddeexcbxhfhgef"), "NOK 8")
    })
})