// @flow
import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { Controlled as CodeMirror } from 'react-codemirror2';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/javascript/javascript.js';
import IFrame from './IFrame';
import Button from './Button';

type State = {
    userCode: string,
    executedCode: string,
};

type Props = {
    template: string,
    isFinalStep: boolean,
    preImageText?: string,
    imageSrc?: string,
    postImageText?: string,
    onChange?: (value: string) => void,
    onRun?: (code: string) => void,
    onSubmit?: (code: string) => void,
};

const EditorContainer = styled.div`
    display: inline;
    float: left;
    width: calc(50% - 10px);
    height: 300px;
    border-width: 2px;
    border-color: #273236;
    border-style: solid;
`;

const IFrameContainer = styled.div`
    height: 300px;
    border-style: solid;
    border-width: 2px;
`;

const StyledText = styled.div`
    color: #111;
    font-family: 'Open Sans', sans-serif;
    font-size: 30px;
    font-weight: 300;
    line-height: 32px;
    margin: 0 75px 20px;
`;
const StyledImage = styled.img`
    width: 200px;
    height: 200px;
    display: block;
    margin: 0 auto;
`;

class SingleStepChallenge extends PureComponent<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            userCode: props.template,
            executedCode: props.template,
        };
    }
    // Use this method if component changes and you want to update it.
    // In this case the template changes every time user clicks next.
    componentWillReceiveProps(nextProps: Props) {
        if (nextProps.template !== this.props.template) {
            this.setState({
                userCode: nextProps.template,
            });
        }
    }

    onChangeCode = () => {
        if (this.props.onChange) {
            this.props.onChange(this.state.userCode);
        }
    };

    onClickRun = () => {
        if (this.props.onRun) {
            this.props.onRun(this.state.userCode);
        }
        this.setState({
            executedCode: this.state.userCode,
        });
    };
    onClickSubmit = () => {
        if (this.props.onSubmit) {
            this.props.onSubmit(this.state.userCode);
        }
    };

    render() {
        const {
            isFinalStep,
            preImageText,
            postImageText,
            imageSrc,
        } = this.props;
        const { userCode, executedCode } = this.state;
        return (
            <div>
                <StyledText>{preImageText}</StyledText>
                <StyledImage src={imageSrc} alt={imageSrc} />
                <StyledText>{postImageText}</StyledText>
                <EditorContainer>
                    <CodeMirror
                        value={userCode}
                        options={{
                            name: 'javascript',
                            json: true,
                            theme: 'material',
                            lineNumbers: true,
                            autoCursor: true,
                        }}
                        onBeforeChange={(editor, data, userInput) => {
                            this.setState({ userCode: userInput });
                        }}
                        onChange={this.onChangeCode}
                    />
                </EditorContainer>
                <IFrameContainer>
                    <IFrame
                        sourceCode={executedCode}
                        sandbox="allow-scripts"
                        title="Output"
                        width="50%"
                        height="300"
                    />
                </IFrameContainer>
                <Button content="Run" onClick={this.onClickRun} />
                <Button
                    content={isFinalStep ? 'Submit' : 'Next'}
                    onClick={this.onClickSubmit}
                />
            </div>
        );
    }
}

export default SingleStepChallenge;
