import React from 'react';
import { render } from 'react-dom';
import document from 'global/document';
import { hot } from 'react-hot-loader';
import HotRoot from './HotRoot';

const READY_STATE_LOADING = 'loading';

function mount() {
    render(<HotRoot />, document.getElementById('mount'));
}

if (document.readyState !== READY_STATE_LOADING) {
    mount();
} else {
    document.addEventListener('DOMContentLoaded', () => mount());
}
