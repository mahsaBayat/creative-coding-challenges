// @flow

import React, { PureComponent } from 'react';
import styled from 'styled-components';

type Props = {
    content: string,
    onClick?: Function,
    className?: string,
};

class Button extends PureComponent<Props> {
    render() {
        return (
            <button
                className={this.props.className}
                onClick={this.props.onClick}
            >
                {this.props.content}
            </button>
        );
    }
}

const StyledButton = styled(Button)`
    color: red;
    background-color: yellow;
`;

export default StyledButton;
