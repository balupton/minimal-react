import React, {Component} from 'react'
import Radium from 'radium'

const styles = {
    app: {
        color: 'red'
    }
}

@Radium
class App extends Component {
	render () {
		return (
			<div style={styles.app}>
				<h1>Hello</h1>
			</div>
		)
	}
}

export default App
