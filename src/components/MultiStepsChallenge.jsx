// @flow
import React, { PureComponent } from 'react';
import styled from 'styled-components';
import SingleStepChallenge from './SingleStepChallenge';
import Button from './Button';

type State = {
    userCodeList: Array<string>,
};

type Props = {
    description?: Array<string>,
    numberOfSteps?: number,
    scaffold: string, // only for the first editor
};
class MultiStepsChallenge extends PureComponent<Props, State> {
    constructor(props: Props) {
        super(props);
        const userCodeList = Array.from(Array(props.numberOfSteps));
        userCodeList[0] = props.scaffold;
        this.state = {
            // userCodeList: userCodeList,
            userCodeList,
        };
    }
    onClickNext = (userCode: string, i: number) => {
        // pull the fucken array out
        // const userCodeList = this.state.userCodeList;
        const { userCodeList } = this.state;
        userCodeList[i + 1] = userCode;
        this.setState({
            // everything on the right side copy it into the left side because react does not do a deep comparison
            userCodeList: [...userCodeList],
        });
    };

    render() {
        const challenges = this.state.userCodeList.map((userCode, i) => (
            <SingleStepChallenge
                // when mapping, each child in an array or iterator should have a unique "key" prop.
                key={i}
                template={userCode}
                onNext={(nextCode: string) => this.onClickNext(nextCode, i)}
            />
        ));

        return <div>{challenges}</div>;
    }
}

export default MultiStepsChallenge;
