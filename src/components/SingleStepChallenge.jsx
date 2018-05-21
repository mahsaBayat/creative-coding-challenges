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
};

type Props = {
    onRun: (code: State) => any,
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
        };
    }

    onClickRun = () => {
        this.props.onRun(this.state);
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
                    />
                </EditorContainer>
                <IFrame
                    sourceCode={this.state.userCode}
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
