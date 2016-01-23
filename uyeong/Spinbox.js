import React from 'react';

const {number} = React.PropTypes;
const ESCAPE_KEY = 27;
const ENTER_KEY = 13;

class Spinbox extends React.Component {

    static propTypes = {
        initialValue: number.isRequired,
        max: number,
        min: number,
        step: number
    };

    static defaultProps = {
        max: 200,
        min: 0,
        step: 1
    };

    /**
     * Spinbox의 생성자
     * @constructs
     * @param {Spinbox.propTypes} props
     */
    constructor(props) {
        super(props);

        this.state = {
            value: this.props.initialValue
        };
    }

    /**
     * Spinbox을 렌더링한다.
     * @returns {ReactElement|XML}
     */
    render() {
        return (
            <div className="spinbox">
                <input
                    ref="input"
                    type="text"
                    value={this.state.value}
                    onChadnge={this.onChange}
                    onBlur={this.onBlur}
                    onKeyUp={this.onKeyUp}
                />
                <button onClick={this.onIncrease}>⬆</button>
                <button onClick={this.onDecrease}>⬇︎</button>
            </div>
        );
    }

    onChange = (event) => {
        this.setState({value: event.target.value});
    };

    onIncrease = () => {
        this.setInputValue(this.state.value + this.props.step);
    };

    onDecrease = () => {
        this.setInputValue(this.state.value - this.props.step);
    };

    onBlur = (event) => {
        this.setInputValue(this.convertToInt(event.target.value));
    };

    onKeyUp = (event) => {
        let value = event.target.value;

        if (event.keyCode === ESCAPE_KEY) {
            value = this.props.initialValue;
        }

        if (event.keyCode === ESCAPE_KEY ||
            event.keyCode === ENTER_KEY) {
            this.setInputValue(this.convertToInt(value));
            this.refs.input.blur();
        }
    };

    convertToInt = (value) => {
        if (value === '') {
            value = 0;
        }

        if (!Number.isInteger(value)) {
            value = parseInt(value.replace(/(?!^-)[^0-9.]/g, ''), 10);
        }

        return value;
    };

    setInputValue = (value) => {
        if (value > this.props.max) {
            value = this.props.max;
        }

        if (value < this.props.min) {
            value = this.props.min;
        }

        value = parseInt(value, 10);

        this.setState({value});
    };
}

export default Spinbox;
