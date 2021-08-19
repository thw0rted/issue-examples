import { JulianDate } from "cesium";

export function dayOf(jd: JulianDate): number {
    return jd.dayNumber;
}
