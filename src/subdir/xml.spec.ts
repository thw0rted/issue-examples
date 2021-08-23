import { getChildAttrs } from "./xml";


// NOTE: this syntax works with webpack, provided you define a loader rule that
// imports XML files as a literal string.  Alternately, you can configure the
// loader to return an asset URL, or a data-URI with inline base64-encoded data,
// then `fetch` it.

// import fileAsset from "./test-data/data.xml";


// Bad smell, don't want to hard-code the path relative to current file
const DATA_PATH = "/base/src/subdir/test-data/data.xml";

describe("xml", () => {
    const parser = new DOMParser();

    xit("Loads a bundled asset", () => {
        // const fileDoc = parser.parseFromString(fileAsset, "text/xml");
        // const fileAttrs = getChildAttrs(fileDoc, "child");
        // expect(fileAttrs.get("x")).toBe("1");
        // expect(fileAttrs.get("y")).toBe("2");
    });

    it("fetches via path", () => {
        return fetch(DATA_PATH).then(resp => resp.text()).then(text => {
            const fetchDoc = parser.parseFromString(text, "text/xml");
            const fetchAttrs = getChildAttrs(fetchDoc, "child");
            expect(fetchAttrs.get("x")).toBe("1");
            expect(fetchAttrs.get("y")).toBe("2");
        });

    });
})
