
let assert = require("assert")

describe.only("Retry testsuite", function() {

    this.retries(5);

    it("Adding numbers test", function() {
        const random_num = Math.floor(Math.random() * 2);
        
        console.log(random_num)
        assert.equal(random_num, 1);
    })

})
