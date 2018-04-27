// @flow

import React, { PureComponent } from 'react';
import styled from 'styled-components';
import FormField from '../components/FormField';
import Button from '../components/Button';

type Props = {
    submit: (credentials: Credentials) => any,
};

type State = Credentials;

class SimpleForm extends PureComponent<Props, State> {
    state = {
        firstName: '',
        lastName: '',
    };

    onFirstNameChange = (firstName: string) => {
        this.setState({
            firstName,
        });
    };

    onLastNameChange = (lastName: string) => {
        this.setState({
            lastName,
        });
    };

    onClickSubmit = () => {
        this.props.submit(this.state);
    };

    render() {
        return (
            <div>
                <FormField
                    id="firstName"
                    placeholder="Tony"
                    onChange={this.onFirstNameChange}
                />
                <FormField
                    id="lastName"
                    placeholder="Luk"
                    onChange={this.onLastNameChange}
                />
                <Button content="Submit" onClick={this.onClickSubmit} />
            </div>
        );
    }
}

export default SimpleForm;
