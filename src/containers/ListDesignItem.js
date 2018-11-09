import { connect } from 'react-redux'
import ListDesignItem from '../components/ListDesignItem'
import { onEnter, onLeave } from '../actions'

const mapDispatchToProps = dispatch => ({
        onEnter: moji => dispatch(onEnter(moji)),
        onLeave: () => dispatch(onLeave())
})

export default connect(
    null,
    mapDispatchToProps
)(ListDesignItem)
