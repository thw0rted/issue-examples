import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { HelloInputComponent } from "./hello.component";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    declarations: [
        AppComponent,
        HelloInputComponent
    ],
    bootstrap: [
        AppComponent,
    ]
})
export class AppModule {

}
