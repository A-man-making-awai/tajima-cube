import React from 'react'
import PropTypes from 'prop-types'
import ListDesign from '../containers/ListDesign'
import BtnCloser from '../containers/BtnCloser'
import Circles from './Circles'
import Cubes from './Cubes'
import Shapes from './Shapes'

class Main extends React.Component {
    constructor(){
        super()

        this.state = {
            deg: 0,
            loops: [],
            transform: null
        }

        this.onEnter = this.onEnter.bind(this)
        this.onLeave = this.onLeave.bind(this)
        this.loop = this.loop.bind(this)
        this.clear = this.clear.bind(this)
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.clicked !== nextProps.clicked) this.loop()
    }

    loop() {
        this.clear()

        let deg = this.state.deg
        const loops = this.state.loops

        const loop = setInterval(() => {
            loops.push(loop)

            if (deg > 7200) deg = 0
            deg += 10

            this.setState({
                deg,
                loops,
                transform: `rotateX(${deg}deg) rotateY(${deg}deg) rotateZ(${deg}deg)`
            })
        }, 200)
    }

    clear() {
        const loops = this.state.loops
        loops.map(loop => clearInterval(loop))

        this.setState({
            loops: []
        })
    }

    onEnter() {
        this.clear()

        this.setState({
            transform: 'rotateX(0) rotateY(0) rotateZ(0)'
        })
    }

    onLeave() {
        this.loop()
    }

    render() {
        const { moji, clicked } = this.props

        const classNames = ['stage']
        if (moji) classNames.push(moji)
        if (clicked) classNames.push('closer')

        return (
            <main>
                <ListDesign />
                <div className="container">
                    <BtnCloser />
                    <div className={classNames.join(' ')}>
                        <div
                            className="whole"
                            onMouseEnter={this.onEnter}
                            onMouseLeave={this.onLeave}
                            style={{transform: this.state.transform}}
                        >
                            <Circles />

                            <Cubes />
                        </div>
                    </div>
                    <Shapes />
                </div>
            </main>
        )
    }

    static propTypes = {
        moji: PropTypes.string.isRequired,
        clicked: PropTypes.bool.isRequired
    }
}

export default Main