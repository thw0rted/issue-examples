export class Foo {
    el: HTMLElement;
}

export interface Bar {
    bazArgs: ConstructorParameters<typeof Baz>[0];
}

export class Baz {
    public constructor(opts: {
        a: boolean;
    }) { }
}
