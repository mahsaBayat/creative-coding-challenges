// @flow

import React, { PureComponent } from 'react';
import FormField from './FormField';
import FormTextArea from './FormTextArea';
import Button from './Button';

type PersonalInfo = {
    firstName: string,
    lastName: string,
    // gender: string,
    interests: string,
};

type Props = {
    submit: (personalInfo: PersonalInfo) => any,
};

type State = PersonalInfo;

class RegistrationForm extends PureComponent<Props, State> {
    state = {
        firstName: '',
        lastName: '',
        // gender: '',
        interests: '',
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

    onInterestsChange = (interests: string) => {
        this.setState({
            interests,
        });
    };

    onClickSubmit = () => {
        this.props.submit(this.state);
    };

    render() {
        return (
            <div>
                <FormField
                    type="text"
                    placeholder="e.g. Johnny"
                    id="firstName"
                    label="Your First Name:"
                    onChange={this.onFirstNameChange}
                />
                <FormField
                    type="text"
                    placeholder="e.g. Bravo"
                    id="lastName"
                    label="Your Last Name:"
                    onChange={this.onLastNameChange}
                />
                <FormTextArea
                    id="interests"
                    rows="5"
                    cols="50"
                    placeholder="e.g. clubbing"
                    label="Your interests:"
                    type="text"
                    onChange={this.onInterestsChange}
                />
                <Button content="Register" onClick={this.onClickSubmit} />
            </div>
        );
    }
}

export default RegistrationForm;
