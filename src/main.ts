import { point } from "./getPoint";
import { checkWeb } from "./sharepointIssue";

console.log(point);
checkWeb("https://example.com/parent/sub").then(
    () => console.log("success"),
    err => console.log("failure", err),
);