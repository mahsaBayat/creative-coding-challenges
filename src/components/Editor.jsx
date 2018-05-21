// @flow
import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { Controlled as CodeMirror } from 'react-codemirror2';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/javascript/javascript.js';
import Button from '../components/Button';

type State = {
    userCode: string,
};

type Props = {
    onRun: (code: State) => any,
    template: string,
};

const Container = styled.div`
    width: 500px;
    height: 400px;
`;

class Editor extends PureComponent<Props, State> {
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
                <Container>
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
                    <Button content="Run" onClick={this.onClickRun} />
                </Container>
            </div>
        );
    }
}

export default Editor;
