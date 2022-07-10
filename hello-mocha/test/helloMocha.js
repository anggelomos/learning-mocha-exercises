
let assert = require("assert")

describe("Mathematical operations testsuite", function() {

    it("Adding numbers test", function() {
        const num1 = 10;
        const num2 = 10;
        const expected = 20;

        assert.equal(num1 + num2, expected);
    })

    it("Substracting numbers test", function() {
        const num1 = 10;
        const num2 = 10;
        const expected = 0;

        assert.equal(num1 - num2, expected);
    })

})
