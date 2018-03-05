import React from 'react';
import { render } from 'react-dom';
import document from 'global/document';
import { AppContainer } from 'react-hot-loader';
import Root from '../../src/components/Root';

const READY_STATE_LOADING = 'loading';

function mount() {
    render(
        <AppContainer>
            <Root />
        </AppContainer>,
        document.getElementById('mount'),
    );
}

if (document.readyState !== READY_STATE_LOADING) {
    mount();
} else {
    document.addEventListener('DOMContentLoaded', mount);
}

if (module.hot) {
    module.hot.accept('../../src/components/Root', mount);
}
