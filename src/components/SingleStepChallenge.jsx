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
    onChange: (value: string) => any,
    onRun: (code: string) => string,
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
    onChangeCode = () => {
        this.props.onChange(this.state.userCode);
    };

    // onClickRun = () => {
    //     this.props.onRun(this.state.userCode);
    // };

    onClickRun = () => {
        this.props.onRun(this.state.userCode);
        this.setState({
            executedCode: this.state.userCode,
        });
    };

    render() {
        return (
            <div>
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
            </div>
        );
    }
}

export default SingleStepChallenge;
