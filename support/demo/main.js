import React from 'react';
import { render } from 'react-dom';
import document from 'global/document';
import { AppContainer } from 'react-hot-loader';
import App from '../../src/component/App';

const READY_STATE_LOADING = 'loading';

function mount() {
	  render(
		    <AppContainer>
            <App />
		    </AppContainer>,
		    document.getElementById('mount')
	  );
}

if (document.readyState !== READY_STATE_LOADING) {
	mount();
} else {
	document.addEventListener('DOMContentLoaded', mount);
}

if (module.hot) {
	module.hot.accept('../../src/component/App', mount);
}
