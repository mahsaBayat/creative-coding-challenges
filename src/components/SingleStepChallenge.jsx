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
    description?: string,
    onChange?: (value: string) => void,
    onRun?: (code: string) => void,
    onNext?: (code: string) => void,
    template: string,
};

const EditorContainer = styled.div`
    display: inline;
    float: left;
    width: 530px;
    height: 300px;
    border-style: solid;
    border-width: 2px;
    border-color: #273236;
`;

class SingleStepChallenge extends PureComponent<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            userCode: props.template,
            executedCode: props.template,
        };
    }

    componentWillReceiveProps(nextProps: Props) {
        // handle the template if it changes
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
    onClickNext = () => {
        if (this.props.onNext) {
            this.props.onNext(this.state.userCode); // callback
        }
    };

    render() {
        return (
            <div>
                <div>{this.props.description}</div>
                <EditorContainer>
                    <CodeMirror
                        value={this.state.userCode}
                        options={{
                            name: 'javascript',
                            json: true,
                            theme: 'material',
                            lineNumbers: true,
                            autoCursor: true,
                        }}
                        onBeforeChange={(editor, data, userCode) => {
                            this.setState({ userCode });
                        }}
                        onChange={this.onChangeCode}
                    />
                </EditorContainer>
                <IFrame
                    sourceCode={
                        this.state.executedCode ? this.state.executedCode : ' '
                    }
                    sandbox="allow-scripts"
                    title="Output"
                    width="530"
                    height="300"
                />
                <Button content="Run" onClick={this.onClickRun} />
                <Button content="Next" onClick={this.onClickNext} />
            </div>
        );
    }
}

export default SingleStepChallenge;
