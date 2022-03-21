import * as app from './App'
import * as math from './Math'

test('calls math.add', () => {
    const addMock = jest.spyOn(math, 'add')

    //calls the original implementation
    expect(app.doAdd(1, 2)).toEqual(3)
    
    //Spy stores the calls to add
    expect(addMock).toHaveBeenCalledWith(1, 2)
})