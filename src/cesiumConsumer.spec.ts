import { JulianDate } from "cesium";

import { dayOf } from "./cesiumConsumer";


const SOME_DAY = JulianDate.fromIso8601("2021-08-19T00:01:02Z");

describe("Cesium consumer", () => {
    it("Gets the day number", () => {
        // No idea what today's julian date is, but it's not 1
        expect(dayOf(SOME_DAY)).not.toBe(1);
    });
});
