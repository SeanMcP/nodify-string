const nodifyString = require('../src/index')

describe('nodifyString', () => {
    test('Returns Array when passed nothing', () => {
        expect(nodifyString()).toBeInstanceOf(Array)
    });
    test.each`
        value
        ${undefined}
        ${1}
        ${{ test: true }}
        ${() => {}}
        ${true}
        ${null}
    `('Returns Array when passed $value (non-string)', ({ value }) => {
        expect(nodifyString(value)).toBeInstanceOf(Array)
    })
    test('Returns NodeList from empty string', () => {
        const output = nodifyString('')
        expect(output).toBeInstanceOf(NodeList)
    })
    test('Returns Array from empty string with array option', () => {
        const output = nodifyString('', { array: true })
        expect(output).toBeInstanceOf(Array)
    })
    test('Nodifies single-element string', () => {
        const output = nodifyString('<p>Test</p>')
        expect(output.length).toBe(1)
        expect(output[0]).toBeInstanceOf(HTMLParagraphElement)
    })
    test('Nodifies multi-element string', () => {
        const output = nodifyString('<p>Test</p><div>Test</div>')
        expect(output.length).toBe(2)
        expect(output[0]).toBeInstanceOf(HTMLParagraphElement)
        expect(output[1]).toBeInstanceOf(HTMLDivElement)
    })
    test('Preserve element id', () => {
        const output = nodifyString('<p id="id-test">Test</p>')
        expect(output[0].id).toMatch('id-test')
    });
    test('Preserve element class', () => {
        const output = nodifyString('<p class="class-test">Test</p>')
        expect(output[0].classList.contains('class-test')).toBe(true)
    });
})