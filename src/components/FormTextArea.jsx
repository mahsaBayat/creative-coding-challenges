// @flow

import React, { PureComponent } from 'react';
import styled from 'styled-components';

type Props = {
    label: string,
    rows: number,
    cols: number,
    id: string,
    placeholder: string,
    onChange: (text: string) => any,
};

const StyledLabel = styled.label`
    display: inline-block;
    font-size: var(--font-size-small);
    font-family: 'Roboto', sans-serif;
    color: #000080;
`;

const StyledTextArea = styled.textarea`
    padding: 12px 20px;
    display: block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
`;

class FormTextArea extends PureComponent<Props> {
    onTextAreaChange = (event: SyntheticEvent<*>) => {
        this.props.onChange(event.target.value);
    };

    render() {
        return (
            <div>
                <StyledLabel htmlFor={this.props.id}>
                    {this.props.label}
                </StyledLabel>
                <StyledTextArea
                    id={this.props.id}
                    rows={this.props.rows}
                    cols={this.props.cols}
                    placeholder={this.props.placeholder}
                    onChange={this.onTextAreaChange}
                />
            </div>
        );
    }
}

export default FormTextArea;
