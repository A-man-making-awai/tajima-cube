import initialState from './initialState'

const listDesign = (state = initialState, action) => {
    switch (action.type) {
        case 'ON_ENTER':
            return Object.assign({}, state, {
                moji: action.moji
            })
        case 'ON_LEAVE':
            return Object.assign({}, state, {
                moji: ''
            });
        default:
            return state
    }
}

export default listDesign