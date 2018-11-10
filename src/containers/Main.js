import { connect } from 'react-redux'
import Main from '../components/Main'

const mapStateToProps = state => ({
    moji: state.all.moji,
    clicked: state.all.clicked
})

export default connect(
    mapStateToProps
)(Main)