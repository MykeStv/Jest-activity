import * as app from '../src/App'
import * as math from '../src/Math'

//Set all module functions to jest.fn
//So this allows write all the cloning functions
jest.mock('./math.js') //simulates the functions

test('calls moth.add', () => {
    app.doAdd(1, 2)
    expect(math.add).toHaveBeenCalledWith(1,2)
})

test('calls math.subtract', () => {
    app.doSubtract(1,2)
    expect(math.subtract).toHaveBeenCalledWith(1,2)
})

test('calls moth.multiply', () => {
    app.doMultiply(5, 2)
    expect(math.multiply).toHaveBeenCalledWith(5,2)
    
})

test('calls moth.divide', () => {
    app.doDivide(1, 2)
    expect(math.divide).toHaveBeenCalledWith(1,2)
})