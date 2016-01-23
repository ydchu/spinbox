import React from 'react';

const number = React.PropTypes.number;

class OverflowException extends Error {
    constructor() {
        super('overflow');
    }
}

class UnderflowException extends Error {
    constructor() {
        super('underflow');
    }
}

class SpinBox extends React.Component {

    static propTypes = {
        value: number.isRequired,
        max: number,
        min: number,
        step: number
    };

    static defaultProps = {
        max: Number.MAX_VALUE,
        min: Number.MIN_VALUE,
        step: 1
    };

    /**
     * SpinBox의 생성자
     * @constructs
     * @param {SpinBox.propTypes} props
     */
    constructor(props) {
        super(props);

        this.state = {
            value: props.value
        };
    }

    changed = () => {
        this._increase(parseInt(this.refs.input.value, 10), 0);
    };

    increase = () => {
        this._increase(this.state.value, this.props.step);
    };

    decrease = () => {
        this._increase(this.state.value, -this.props.step);
    };

    _increase(currentValue, step) {
        try {
            const next = currentValue + step;
            this.validate(next);
            this.setState({value: next, error: null});
        } catch (e) {
            if (e.message === 'overflow') { // e instanceof OverflowException) {
                this.setState({value: this.props.max, error: 'overflow'});
            } else if (e.message === 'underflow') { // e instanceof UnderflowException) {
                this.setState({value: this.props.min, error: 'underflow'});
            } else if (e.message === 'NaN') {
                this.setState({value: 0, error: null});
            }
        }
    }

    validate(value) {
        if (Number.isNaN(value)) {
            throw new Error('NaN');
        } else if (this.props.min > value) {
            //throw new UnderflowException();
            throw new Error('underflow');
        } else if (this.props.max < value) {
            //throw new OverflowException();
            throw new Error('overflow');
        }
    }

    /**
     * SpinBox을 렌더링한다.
     * @returns {ReactElement|XML}
     */
    render() {
        return (<div>
            <input type="text"
                   ref="input"
                   value={this.state.value}
                   onChange={this.changed} />
            <button onClick={this.increase}
                    disabled={this.state.error === 'overflow'}>+</button>
            <button onClick={this.decrease}
                    disabled={this.state.error === 'underflow'}>-</button>
        </div>);
    }
}

export default SpinBox;

