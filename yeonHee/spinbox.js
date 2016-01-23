import React from "react";
import SpinboxInput from "./spinboxInput";

class Spinbox extends React.Component {

	render() {
		return (
			<div>
				<div>Spinbox!!</div>
				<SpinboxInput
					initialValue={10}
					max={20}
					min={10}
					step={1}
				/>
			</div>
		);
	}
}

Spinbox.propTypes = {
	initialValue: React.PropTypes.number.isRequired
}

Spinbox.defaultProps = {
	initialValue: 10,
	max: 20,
	min: 10,
	step: 1
}

export default Spinbox;
