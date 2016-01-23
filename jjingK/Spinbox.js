import React from 'react'

class Spinbox extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      current: this.props.initialValue
    }
  }
  handlerPlus() {
    console.log('+', this.state.current);
    let current =  this.state.current + this.props.step;
    if (current > this.props.max ) {
      current = this.props.max
    }
    this.setState({ current: current });
  }

  handlerMinus() {
    console.log('-', this.state.current)
    let current = this.state.current - this.props.step;
    if (current < this.props.min ) {
      current = this.props.min
    }
    this.setState({ current: current });
  }

  handlerInput() {
    // console.log(this.refs.number.value, isNaN(this.refs.number.value));
    let num = this.refs.number.value;
    if (!/[^0-9\-]/.test(num) && Number.isInteger(num)) {
      return;
    }
    if (num < this.props.min) {
      num = this.props.min
    } else if (num > this.props.max) {
      num = this.props.max
    }
    this.setState({ current: num });
  }

  render() {
    return (
      <div className="spinner">
        <input type="text" value={this.state.current} ref="number" onChange={this.handlerInput.bind(this)}/>
        <button onClick={this.handlerPlus.bind(this)}>Up</button>
        <button onClick={this.handlerMinus.bind(this)}>Down</button>
      </div>
    )
  }
}

export default Spinbox;
