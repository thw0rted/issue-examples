describe("Example", () => {
    let data = undefined;

    beforeEach(async () => {
        if (Math.random() < 0.01) {
            data = 1;
            return Promise.resolve();
        } else {
            console.log("Data is still undefined, rejecting");
            return Promise.reject();
        }
    });

    it("should work", () => {
        if (undefined === data) {
            console.log("I should never have run");
        }
        expect(data.toString(10)).toBe("1");
    });
});

