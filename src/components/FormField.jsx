// @flow

import React, { PureComponent } from 'react';
import styled from 'styled-components';

type Props = {
    label: string,
    placeholder: string,
    id: string,
    onChange: (text: string) => any,
};

class FormField extends PureComponent<Props> {
    // Use fat arrow functions to lock this to current context becasue context
    // will change when a function is called from outside this component (e.g. input)
    onChange = (event: SyntheticEvent<*>) => {
        this.props.onChange(event.target.value);
    };

    render() {
        return (
            <div>
                <label htmlFor={this.props.id}>{this.props.label}</label>
                <input
                    id={this.props.id}
                    placeholder={this.props.placeholder}
                    onChange={this.onChange}
                />
            </div>
        );
    }
}

export default FormField;
