import { FormControl, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from "@angular/platform-browser-dynamic/testing";
import { TestBed } from "@angular/core/testing";
import { createHostFactory, SpectatorHost } from "@ngneat/spectator";


// NB: side-effect import of Module first so that Ivy compiles Hello component
// using the correct `imports` (e.g. FormsModule), otherwise it complains about
// `ngModel` being an unrecognized input
import "./app.module";

import { HelloInputComponent } from "./hello.component";


const createHost = createHostFactory({
    component: HelloInputComponent,
    imports: [
        // Must include Forms/ReactiveForms here again because they're used by
        // the dynamically-created host components
        FormsModule,
        ReactiveFormsModule,
    ],
});

describe("Hello Component", () => {
    let host: SpectatorHost<HelloInputComponent>;
    let fc = new FormControl("hi");

    beforeAll(() => {
        TestBed.initTestEnvironment(
            [BrowserDynamicTestingModule], platformBrowserDynamicTesting());
    });

    it("binds to formControl", async () => {
        host = createHost('<hello-input [formControl]="fc"></hello-input>', {
            hostProps: {
                fc,
            }
        });

        // Needs two DT/stable cycles because displayed location is a second-order observable
        host.detectChanges();
        await host.fixture.whenStable();

        const input: HTMLInputElement | null = host.query("input");
        expect(input).toBeDefined();
        expect(input?.value).toBe("hi");
    })
});
