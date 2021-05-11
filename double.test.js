const { it, expect } = require('@jest/globals')
const { double } = require('./double')

describe('double', () => {
    it('doubles the input value', () => {
        const doubledValue = double(2);

        expect(doubledValue).toBe(4)
    })
})