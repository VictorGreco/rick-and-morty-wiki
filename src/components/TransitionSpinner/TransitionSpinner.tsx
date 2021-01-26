import React from 'react';
import './TransitionSpinner.css';
import logo from '../../logo.png';

interface TransitionSpinnerState {
    hidden: boolean;
}

interface TransitionSpinnerProps {
}

class TransitionSpinner extends React.Component<TransitionSpinnerProps, TransitionSpinnerState> {
    constructor(props: TransitionSpinnerProps) {
        super(props);

        this.state = {
            hidden: false
        };
    }

    render() {
        setTimeout(() => {
            this.setState({hidden: true});
        }, 2000);

        return (
            <div className={`TransitionSpinner ${this.state.hidden ? 'hidden': ''}`}>
                <img className="spinner" src={logo} alt="logo" height="75" width="auto" />
            </div>
        );
    }
}

export default TransitionSpinner;
