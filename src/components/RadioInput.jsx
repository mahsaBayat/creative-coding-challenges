import React, { PureComponent } from 'react';
import styled from 'styled-components';
import FormField from './FormField';
import InputLabel from './InputLabel';

type Props = {
    type: string,
    name: string,
    value: string,
    id: string,
    label?: string,
    onChange: (text: string) => any,
};

const StyledInput = styled.input`
    display: inline;
    font-size: var(--font-size-small);
    font-family: 'Roboto', sans-serif;
    color: red;
    margin: 8px;
`;

// const RadioLabel = InputLabel.extend`
//     color: red;
// `;

class RadioInput extends PureComponent<Props> {
    onChange = (event: SyntheticEvent<*>) => {
        this.props.onChange(event.target.value);
    };

    render() {
        return (
            <div>
                <InputLabel content={this.props.label} />
                <StyledInput
                    type={this.props.type}
                    name={this.props.name}
                    value={this.props.value}
                    onChange={this.onChange}
                    id={this.props.id}
                />
                {this.props.value}
            </div>
        );
    }
}

export default RadioInput;
