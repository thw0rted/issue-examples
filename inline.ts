interface Bar {
    x: string;
}

interface Bar {
    x: number;
}

declare const b: Bar;

b.x = "";
b.x = 2;
