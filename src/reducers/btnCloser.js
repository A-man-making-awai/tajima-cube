
import initialState from './initialState'

const btnCloser = (state = initialState, action) => {
    switch (action.type) {
        case 'ON_CLICK':
            return Object.assign({}, state, {
                clicked: true
            })
        default:
            return state
    }
}

export default btnCloser