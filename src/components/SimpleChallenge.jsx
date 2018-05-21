// @flow
import React, { PureComponent } from 'react';
import styled from 'styled-components';
import Editor from '../components/Editor';
import IFrame from '../components/IFrame';

type Props = {
    onRun: Function,
};
class SimpleChallenge extends PureComponent<Props> {
    render() {
        return (
            <div>
                {' '}
                <Editor
                    template="console.log('OMG')"
                    onRun={this.props.onRun}
                />
                <IFrame
                    sourceCode="javascript:false"
                    title="Output"
                    width="500"
                    height="300"
                    align="right"
                    sandbox="allow-script"
                />
            </div>
        );
    }
}

export default SimpleChallenge;
