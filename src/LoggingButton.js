import React from 'react';

class LoggingButton extends React.Component {
	constructor(props) {
		super(props);
		this.state = {timesClicked: 0};

		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		this.setState(state => ({
			timesClicked: state.timesClicked + 1
		}));
	}

	render() {
		return (
			<div>
				<button onClick={this.handleClick}>
					Logging button
				</button>
				{
					this.state.timesClicked > 0 &&
					<p>
						Times clicked: {this.state.timesClicked}
					</p>
				}
			</div>
		);
	}
}

export default LoggingButton;
