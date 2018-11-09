import { connect } from 'react-redux'
import ListDesign from '../components/ListDesign'

const mapStateToProps = state => ({
    clicked: state.btnCloser.clicked
})

export default connect(
    mapStateToProps
)(ListDesign)
