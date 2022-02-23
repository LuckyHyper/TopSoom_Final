require('./bootstrap');

import ReactDOM from 'react-dom';
import Index from './components/Index';

 if (document.getElementById('root')) {
    ReactDOM.render(<Index />, document.getElementById('root'));
}
