import React from 'react';

class LoginForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			userValue: '',
			passValue: '',
			submitDisabled: true
		};

		this.handleUserChange = this.handleUserChange.bind(this);
		this.handlePassChange = this.handlePassChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleUserChange(event) {
		if (event.target.value === "kchieppo")
			this.setState({
				userValue: event.target.value,
				submitDisabled: false
			});
		else
			this.setState({
				userValue: event.target.value,
				submitDisabled: true
			});
	}

	handlePassChange(event) {
	}

	handleSubmit(event) {
		alert("Submitted.");
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<label>
					Username:
					<input type="text" value={this.state.userValue}
						onChange={this.handleUserChange} />
					<br />
					Password:
					<input type="text" value={this.state.passValue}
						onChange={this.handlePassChange} />
				</label>
				<br />
				<input type="submit" value="Submit"
					disabled={this.state.submitDisabled} />
				{this.state.userValue
					&& this.state.submitDisabled &&
				<p>
					Invalid username.
				</p>
				}
			</form>
		);
	}
}

export default LoginForm;
