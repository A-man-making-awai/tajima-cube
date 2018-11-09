import React from 'react'
import Header from './Header'
import Main from '../containers/Main'
import Footer from './Footer'

class App extends React.Component {
    constructor() {
        super()

        this.state = {
            toggle: false
        }
    }

    componentWillMount() {
        setInterval(() => {
            const toggle = !this.state.toggle

            this.setState({
                toggle
            })
        }, 30000)
    }

    render() {
        const className = this.state.toggle ? 'blue': null

        return (
            <div className={className}>
                <Header />
                <Main />
                <Footer />
            </div>
        )
    }
}

export default App
