
let assert = require("assert")

describe.only("Mathematical operations testsuite", function() {

    this.timeout(500);

    it("Adding numbers test", function(done) {
        this.timeout(2000);
        setTimeout(done, 1000)

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
