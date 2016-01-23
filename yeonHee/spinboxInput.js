import React from "react";

class SpinboxInput extends React.Component {
	constructor(props) {
    super(props)

	  this.state = {
			count: this.props.initialValue
		}
  }

	handleClickPlus() {
		console.log('++', this.props.step)
		if (this.props.max > this.state.count) {
			this.setState({count: this.state.count + this.props.step})
		}
	}
// replace(/(?!^-)[^0-9]/g, '');
	handleClickMinus() {
		console.log('--')
		if (this.props.min < this.state.count) {
			this.setState({count: this.state.count - this.props.step})
		}
	}



	render() {
		return (
			<div>
				<input type="text" value={this.state.count} onblur={this.handleChangeInput.bind()}></input>
				<button onClick={this.handleClickPlus.bind(this)}>+</button>
				<button onClick={this.handleClickMinus.bind(this)}>-</button>
			</div>
		);
	}
}

export default SpinboxInput;
