import * as app from '../src/App'
import * as math from '../src/Math'

math.add = jest.fn()
math.subtract = jest.fn()

test('calls math.add', () => {
    app.doAdd(1,2)
    expect(math.add).toBeCalledWith(1, 2)
})

test('calls math.subtract', () => {
    app.doSubtract(1, 2)
    expect(math.subtract).toHaveBeenCalledWith(1, 2)
})