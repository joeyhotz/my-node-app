const utils = require("./utils");

describe('underConstructionMessage', () => {
    it('should return under construction string', () => {
        const message = utils.underConstructionMessage();
        expect(message).toEqual("Under construction");
    })
})