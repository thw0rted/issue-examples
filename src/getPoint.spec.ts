import { point } from "./getPoint";

describe("GetPoint uses Esri REST types", () => {
    it("should have a point", () => {
        expect(point.x).toEqual(1);
    })
});