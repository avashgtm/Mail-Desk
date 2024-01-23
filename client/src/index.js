import 'uikit/dist/css/uikit-core.min.css'
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import {thunk} from 'redux-thunk';
import {createStore, applyMiddleware} from 'redux';

import App from './App';
import reducers from './reducers';

const store = createStore(reducers, applyMiddleware(thunk));

const el = document.getElementById("root");
const root = ReactDOM.createRoot(el);

root.render(
    <Provider store={store}>
        <App/>
    </Provider>
);