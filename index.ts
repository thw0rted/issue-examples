import {CesiumTerrainProvider} from "cesium";

export type Providers = {
    OneProvider: ConstructorParameters<typeof CesiumTerrainProvider>[0],
};

export type ProviderOpts = {
    selectedType: keyof Providers;
}

export interface RuntimeConfig {
    readonly PROVIDER?: ProviderOpts;
}
