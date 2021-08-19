import { add } from "@testing/util";

import { checkWeb } from "./sharepointIssue";

describe("Sharepoint connection", () => {
    it("should fail to get a parent", () => {
        console.log("Two and two makes", add(2,2));
        return expectAsync(checkWeb("https://example.com/parent/sub")).toBeRejected();
    });
});
