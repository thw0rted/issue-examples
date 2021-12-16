import { Component } from "@angular/core";
import { ControlValueAccessor } from "@angular/forms";

@Component({
    selector: "hello-input",
    template: `
<input  type="text" name="hello"
        [disabled]="_disabled"
        [ngModel]="_value"
        (ngModelChange)="changed($event)">
    `,
})
export class HelloInputComponent implements ControlValueAccessor {

    /** @internal */ public changed(val: string) {
        console.log("Changed", val);
        this._onChange?.(val)
    }

    //// CVA implementation

    /** @internal */ public _value: string = "";
    writeValue(obj: any): void {
        this._value = obj;
    }

    /** @internal */ public _onChange?: (val: string) => void;
    registerOnChange(fn: any): void {
        this._onChange = fn;
    }

    private _onTouched?: () => void;
    registerOnTouched(fn: any): void {
        this._onTouched = fn;
    }

    /** @internal */ public _disabled = false;
    setDisabledState?(isDisabled: boolean): void {
        this._disabled = isDisabled;
    }
}
