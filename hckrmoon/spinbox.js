import React from 'react';

class Spinbox extends React.Component {

    /**
     * Spinbox의 생성자
     * @constructs
     * @param {Spinbox.propTypes} props
     */
    constructor(props) {
        super(props);

        this.state = {
            number: props.number,
            step: props.step,
            min: props.min,
            max: props.max
        };
    }

    up() {
        let number = this.state.number + this.state.step;

        if (number > this.state.max) {
            number = this.state.max;
        }

        this.setState({
            number: number
        });
    }

    down() {
        let number = this.state.number - this.state.step;

        if (number < this.state.min) {
            number = this.state.min;
        }

        this.setState({
            number: number
        });
    }

    stepChange() {
        const step = parseInt(this.refs.step.value);

        this.setState({
            step: step
        });
    }

    blurStep() {
        if (!this.state.step) {
            const defaultStep = this.props.step;
            this.setState({
                step: defaultStep
            });
        }
    }

    minChange() {
        const min = parseInt(this.refs.min.value);

        this.setState({
            min: min
        });
    }

    blurMin() {
        if (!this.state.min) {
            const defaultMin = this.props.min;
            this.setState({
                min: defaultMin
            });
        }
    }

    maxChange() {
        const max = parseInt(this.refs.max.value);

        this.setState({
            max: max
        });
    }

    blurMax() {
        if (!this.state.max) {
            const defaultMax = this.props.max;
            this.setState({
                max: defaultMax
            });
        }
    }

    /**
     * Greeting을 렌더링한다.
     * @returns {ReactElement|XML}
     */
    render() {
        const number = this.state.number;
        const step = this.state.step;
        const min = this.state.min;
        const max = this.state.max;

        return (
            <article className="greeting">
                <div className="greeting__inner container">
                    <div className="">
                        Step Value: <input type="number"
                                           ref="step"
                                           onBlur={() => {this.blurStep()}}
                                           onChange={() => {this.stepChange()}}
                                           value={step} />
                    </div>

                    <div className="">
                        Min Value: <input type="number"
                                          ref="min"
                                          onBlur={() => {this.blurMin()}}
                                          onChange={() => {this.minChange()}}
                                          value={min} />
                    </div>

                    <div className="">
                        Max Value: <input type="number"
                                          ref="max"
                                          onBlur={() => {this.blurMax()}}
                                          onChange={() => {this.maxChange()}}
                                          value={max} />
                    </div>

                    <h2>
                        <span className="badge"> {number} </span>
                    </h2>

                    <button onClick={() => {this.up()}}>up</button>
                    <button onClick={() => {this.down()}}>down</button>
                </div>
            </article>
        );
    }
}

/**
 * Spinbox의 Props 인터페이스 정의
 */
Spinbox.propTypes = {
    number: React.PropTypes.number,
    min: React.PropTypes.number,
    max: React.PropTypes.number
};

/**
 * Spinbox의 Props 기본값 정의
 */
Spinbox.defaultProps = {
    number: 0,
    min: -100,
    max: 100,
    step: 1
};

export default Spinbox;
