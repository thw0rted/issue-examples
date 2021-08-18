import { checkWeb } from "./sharepointIssue";

describe("Sharepoint connection", () => {
    it("should fail to get a parent", () => {
        return expectAsync(checkWeb("https://example.com/parent/sub")).toBeRejected();
    });
});