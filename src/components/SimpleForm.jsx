// @flow

import React, { PureComponent } from 'react';
import FormField from '../components/FormField';
import Button from '../components/Button';

type Props = {
    submit: (credentials: Credentials) => any,
};

type State = Credentials;

class SimpleForm extends PureComponent<Props, State> {
    // initialize the state
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
                    placeholder="e.g. Jonny"
                    label="First Name:"
                    type="text"
                    onChange={this.onFirstNameChange}
                />
                <FormField
                    id="lastName"
                    placeholder="e.g. Bravo"
                    label="Last Name:"
                    type="text"
                    onChange={this.onLastNameChange}
                />
                <Button content="Submit" onClick={this.onClickSubmit} />
            </div>
        );
    }
}

export default SimpleForm;
