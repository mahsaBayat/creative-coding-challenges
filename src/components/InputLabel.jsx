// @flow

import React, { PureComponent } from 'react';
import styled from 'styled-components';

type Props = {
    content: string,
};

const StyledInputLabel = styled.label`
    display: block;
    font-size: var(--font-size-small);
    font-family: 'Roboto', sans-serif;
    color: #000080;
`;

class InputLabel extends PureComponent<Props> {
    render() {
        return <StyledInputLabel>{this.props.content}</StyledInputLabel>;
    }
}

export default InputLabel;
