const nodifyString = require('../src/index')

describe('nodifyString', () => {
    test('Converts a simple html string', () => {
        const output = nodifyString('<p>Test</p>')
        // console.log(output['0'])
        expect(output).toBeTruthy()
    })
})