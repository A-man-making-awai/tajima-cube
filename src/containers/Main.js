import { connect } from 'react-redux'
import Main from '../components/Main'

const mapStateToProps = state => ({
    moji: state.listDesign.moji,
    clicked: state.btnCloser.clicked
})

export default connect(
    mapStateToProps
)(Main)