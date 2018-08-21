// @flow
import React, { PureComponent } from 'react';
import styled from 'styled-components';
import SingleStepChallenge from './SingleStepChallenge';
import Button from './Button';

type ChallengeMetaDataType = {
    preText: string,
    postText?: string,
    imageSrc?: string,
};
type State = {
    userCodeList: Array<string>,
};

type Props = {
    metaData?: Array<ChallengeMetaDataType>,
    numberOfSteps?: number,
    onFinalSubmit: (finalSubmittedCode: Array<string>) => void,
    scaffold: string,
};
class MultiStepsChallenge extends PureComponent<Props, State> {
    constructor(props: Props) {
        super(props);
        const userCodeList = Array.from(Array(props.numberOfSteps));
        userCodeList[0] = props.scaffold;
        this.state = {
            userCodeList,
        };
    }
    onClickSubmit = (userCode: string, i: number) => {
        const { numberOfSteps } = this.props;
        const userCodeList = this.state.userCodeList.slice();
        if (numberOfSteps && numberOfSteps !== i + 1) {
            userCodeList[i + 1] = userCode;
            this.setState({
                userCodeList: [...userCodeList],
            });
        } else {
            this.props.onFinalSubmit([...userCodeList, userCode]);
        }
    };

    render() {
        const { metaData, numberOfSteps } = this.props;
        const { userCodeList } = this.state;
        const preImageDescriptions = metaData.map((value, i) => value.preText);

        const postImageDescriptions = metaData.map(
            (value, i) => value.postText
        );
        const imageSrcs = metaData.map((value, i) => value.imageSrc);

        const challenges = userCodeList.map((userCode, i) => (
            <SingleStepChallenge
                // when mapping, each child in an array or iterator should have a unique "key" prop.
                key={i}
                template={userCode}
                // nextCode is basically the code in the current editor that's being passed to onNext
                onSubmit={(nextCode: string) => this.onClickSubmit(nextCode, i)}
                isFinalStep={i + 1 === numberOfSteps}
                preImageText={preImageDescriptions[i]}
                postImageText={postImageDescriptions[i]}
                imageSrc={imageSrcs[i]}
            />
        ));

        return <div>{challenges}</div>;
    }
}

export default MultiStepsChallenge;
// const materialNames = data.map((value, i) => value.materialName);
