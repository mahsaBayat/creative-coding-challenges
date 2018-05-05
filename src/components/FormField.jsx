// @flow

import React, { PureComponent } from 'react';
import styled from 'styled-components';
import InputLabel from './InputLabel';

type Props = {
    label: string,
    placeholder: string,
    id: string,
    type: string,
    onChange: (text: string) => any,
};

const StyledLabel = styled.label`
    display: inline-block;
    font-size: var(--font-size-small);
    font-family: 'Roboto', sans-serif;
    color: #000080;
`;

const StyledInput = styled.input`
    padding: 12px 20px;
    margin: 8px 0;
    display: block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
`;

class FormField extends PureComponent<Props> {
    // Use fat arrow functions to lock 'this' to current context becasue context
    // will change when a function is called from outside this component (e.g. input)
    onChange = (event: SyntheticEvent<*>) => {
        this.props.onChange(event.target.value);
    };

    render() {
        return (
            <div>
                <InputLabel content={this.props.label} />
                <StyledInput
                    id={this.props.id}
                    placeholder={this.props.placeholder}
                    type={this.props.type}
                    onChange={this.onChange}
                />
            </div>
        );
    }
}

export default FormField;
