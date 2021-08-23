import { TEST_INTRO } from "@testing";
import { mul } from "@testing/util";

import { add } from "./math";

describe("math", () => {
    it("adds", () => {
        expect(add(2,3)).toBe(5);
    })

    it("uses testing path", () => {
        console.log(TEST_INTRO);
        expect(mul(2,3)).toBe(6);
    })
})
