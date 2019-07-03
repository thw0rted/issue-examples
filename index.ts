import { BehaviorSubject } from "rxjs";

const s: BehaviorSubject<number[]> = new BehaviorSubject([]);
s.subscribe(x => console.log(x));