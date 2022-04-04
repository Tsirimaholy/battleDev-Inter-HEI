import {assert} from "chai";
import {missingCards} from "./index.js";

describe("Missing cards tests", () => {
    it("should return Q4 Q10 CD T4 C10 P10 T3 P5 QA C9 T6 T8 QV C5 PR C6 PA T9 Q7 T7 TD C7 P4 C8 TA TR Q6 QD PD CV P9 Q8 Q9 Q5 for Q4 Q10 CD T4 C10 P10 T3 P5 QA C9 T6 T8 QV C5 PR C6 PA T9 Q7 T7 TD C7 P4 C8 TA TR Q6 QD PD CV P9 Q8 Q9 Q5", () => {
        assert.equal(missingCards("Q4 Q10 CD T4 C10 P10 T3 P5 QA C9 T6 T8 QV C5 PR C6 PA T9 Q7 T7 TD C7 P4 C8 TA TR Q6 QD PD CV P9 Q8 Q9 Q5"), "C2 C3 C4 CR CA P2 P3 P6 P7 P8 PV Q2 Q3 QR T2 T5 T10 TV");
    })
    it("should return C2 C3 C4 C5 C6 C7 C8 C9 C10 CV CD CR CA P2 P3 P4 P5 P6 P7 P8 P10 PV PD PR PA Q2 Q3 Q4 Q5 Q6 Q7 Q8 Q9 Q10 QV QD QR QA T2 T3 T4 T5 T6 T7 T8 T9 T10 TV TD TR TA for input : P9", () => {
        assert.equal(missingCards("P9"), "C2 C3 C4 C5 C6 C7 C8 C9 C10 CV CD CR CA P2 P3 P4 P5 P6 P7 P8 P10 PV PD PR PA Q2 Q3 Q4 Q5 Q6 Q7 Q8 Q9 Q10 QV QD QR QA T2 T3 T4 T5 T6 T7 T8 T9 T10 TV TD TR TA")
    })
    it("should return C2 C3 C7 C9 C10 CV CD CR CA P2 P3 P4 P5 P6 P7 PV PR PA Q2 Q4 Q7 Q10 QV QR T3 T4 T5 T8 T9 T10 TV TR TA for input : P9 T2 Q3 Q9 PD C8 QD P8 C5 T7 Q8 Q6 Q5 P10 T6 C6 C4 QA TD", () => {
        assert.equal(missingCards("P9 T2 Q3 Q9 PD C8 QD P8 C5 T7 Q8 Q6 Q5 P10 T6 C6 C4 QA TD"), "C2 C3 C7 C9 C10 CV CD CR CA P2 P3 P4 P5 P6 P7 PV PR PA Q2 Q4 Q7 Q10 QV QR T3 T4 T5 T8 T9 T10 TV TR TA")
    })
})