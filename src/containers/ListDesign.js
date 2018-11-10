import { connect } from 'react-redux'
import ListDesign from '../components/ListDesign'

const mapStateToProps = state => ({
    clicked: state.all.clicked
})

export default connect(
    mapStateToProps
)(ListDesign)
