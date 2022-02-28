require('./bootstrap');

import ReactDOM from 'react-dom';
import Index from './components/Index';
import App from './App1';

 if (document.getElementById('root')) {
    ReactDOM.render(<App />, document.getElementById('root'));
}
