import { connect } from 'react-redux'
import BtnCloser from '../components/BtnCloser'
import { onClick } from '../actions'

const mapStateToProps = state => ({
    clicked: state.btnCloser.clicked
})

const mapDispatchToProps = dispatch => ({
        onClick: () => dispatch(onClick())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BtnCloser)
