import React from 'react';
import ReactDOM from 'react-dom';
import Root from './Root';
//TODO cтили
import './styles/index.css';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Root />,
  document.getElementById('root')
);

registerServiceWorker();
