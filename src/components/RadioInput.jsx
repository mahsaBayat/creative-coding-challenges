import React, { PureComponent } from 'react';
import styled from 'styled-components';
import FormField from './FormField';

type Props = {
    name: string,
    value: string,
};

class RadioInput extends FormField<Props> {
    onChange = (event: SyntheticEvent<*>) => {
        this.props.onChange(event.target.value);
    };

    render() {
        return (
            <div>
                <label htmlFor={this.props.id}>{this.props.label}</label>
                <input
                    type={this.props.type}
                    id={this.props.id}
                    placeholder={this.props.placeholder}
                    name={this.props.name}
                    value={this.props.value}
                    onChange={this.onChange}
                />
            </div>
        );
    }
}

export default RadioInput;
