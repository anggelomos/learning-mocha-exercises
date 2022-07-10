
let assert = require("assert")

describe("Mathematical operations testsuite", function() {

    before("Execute before all tests", function() {
        console.log("Hook before all 1")
    })

    before("Execute before all tests", function() {
        console.log("Hook before all 2")
    })

    beforeEach("Execute before each test", function() {
        console.log("Hook before each")
    })

    it("Test case", function() {
        console.log("Test case execution")
    })

    afterEach("Execute after each test", function() {
        console.log("Hook after each")
    })

    after("Execute after all tests", function() {
        console.log("Hook after all")
    })


})
