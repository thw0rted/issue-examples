import "core-js/proposals/reflect-metadata";
import "zone.js/dist/zone";
import "zone.js/dist/zone-patch-rxjs";

import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

import { AppModule } from "./app/app.module";

platformBrowserDynamic().bootstrapModule(AppModule)
.catch(err => console.error("Bootstrap Failed!", err));
