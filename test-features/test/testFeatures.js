
let assert = require("assert")

describe.only("Mathematical operations testsuite", function() {

    it.skip("Adding numbers test", function() {
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

    it.skip("Multiplying numbers test", function() {
        const num1 = 10;
        const num2 = 10;
        const expected = 100;

        assert.equal(num1 * num2, expected);
    })

    it("Dividing numbers test", function() {
        const num1 = 10;
        const num2 = 10;
        const expected = 1;

        assert.equal(num1 / num2, expected);
    })

    it("Power numbers test")

})

describe("Logical operations testsuite", function() {

    it("And operation between two values", function() {
        const bool1 = true;
        const bool2 = false;
        const expected = false;

        assert.equal(bool1 && bool2, expected);
    })

    it("Or operation between two values", function() {
        const bool1 = true;
        const bool2 = false;
        const expected = true;

        assert.equal(bool1 + bool2, expected);
    })

})
