// @flow
import React from 'react';
import SimpleForm from '../SimpleForm';

type Props = {
    credentials: Credentials,
    submitSimpleForm: (credentials: Credentials) => any,
};

// functional component (it does not have this)
export default (props: Props) => (
    <div>
        <SimpleForm submit={props.submitSimpleForm} />
        <div>
            {props.credentials && props.credentials.firstName}{' '}
            {props.credentials && props.credentials.lastName}
        </div>
    </div>
);
