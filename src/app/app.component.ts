import { Component } from "@angular/core";
import { FormControl } from "@angular/forms";

@Component({
    selector: "app-root",
    styles: [
"section { display: flex; flex-direction: column; width: 15em; }"
    ],
    template: `
<h2>FormControl</h2>
<section>
<hello-input [formControl]="fc"></hello-input>
<input name="formControlPair" type="text" [ngModel]="fc.value" (ngModelChange)="fc.setValue($event)">
<button type="button" (click)="fc.disable()">Disable</button>
<button type="button" (click)="fc.enable()">Enable</button>
</section>
<hr/>
<h2>NgModel</h2>
<hello-input [(ngModel)]="val"></hello-input>
<input name="ngModelPair" type="text" [(ngModel)]="val">
`
})
export class AppComponent {
    /** @internal */ public fc = new FormControl();
    /** @internal */ public fcValue = "";
    /** @internal */ public val = "";
}
