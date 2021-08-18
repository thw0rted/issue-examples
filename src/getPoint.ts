// Type-only import used to trip up karma-typescript, fixed in 5.5.0
import type { IPoint } from "@esri/arcgis-rest-types";

export const point: IPoint = {
    x: 1,
    y: 2,
};
