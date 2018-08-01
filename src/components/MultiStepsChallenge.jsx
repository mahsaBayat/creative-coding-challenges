// @flow
import React, { PureComponent } from 'react';
import styled from 'styled-components';
import SingleStepChallenge from './SingleStepChallenge';
import Button from './Button';

type State = {
    userCode: string, // the code user executes
    nextScaffold: string,
};

type Props = {
    description?: Array<string>,
    numberOfSteps?: number,
    scaffold: string, // only for the first editor
};
class MultiStepsChallenge extends PureComponent<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            userCode: this.props.scaffold,
        };
    }
    onClickNext = (userCode: string) => {
        this.setState({
            nextScaffold: userCode,
        });
    };

    render() {
        return (
            <div>
                <SingleStepChallenge
                    template={this.state.userCode}
                    onNext={this.onClickNext}
                />
                <SingleStepChallenge
                    template={this.state.nextScaffold}
                    onNext={this.onClickNext}
                />
            </div>
        );
    }
}

export default MultiStepsChallenge;
