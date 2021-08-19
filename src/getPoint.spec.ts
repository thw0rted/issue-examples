import { TEST_INTRO } from "@testing";
import { point } from "./getPoint";


console.log("Point test loaded", TEST_INTRO);

describe("GetPoint uses Esri REST types", () => {
    it("should have a point", () => {
        expect(point.x).toEqual(1);
    })
});
