import { add } from "./math";
import { getChildAttrs } from "./subdir/xml";

console.log(add(4,5));
console.log(getChildAttrs(document, "div"));
