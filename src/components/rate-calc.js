import React from 'react';

import NumberInput from './number-input';
import Output from './output';

export default class RateCalculator extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            dayRate: 300,
            hours: 10,
            rate: 30
        }
    }
    validateInput() {
        return (this.state.hours > 0 && this.state.dayRate > 0);
    }
    updateFromDayRate(target) {
        //validateInput();
        this.setState({
           dayRate: target
       })
    }
    updateFromHours(target) {
        //validateInput();
        this.setState({
            hours: target
        })
    }
    render() {
        this.state.rate = this.state.dayRate / this.state.hours;
        return (
            <form>
                <NumberInput value={this.state.dayRate} onChange={text => this.updateFromDayRate(text)} id="day-rate" label="Day rate" min={0} max={5000} />
                <NumberInput value={this.state.hours} onChange={text => this.updateFromHours(text)} id="hours" label="Hours" min={1} max={12} />
                <Output id="hourly-rate" label="Hourly rate" value={this.state.rate.toFixed(2)} />
            </form>
        );
    }
}

