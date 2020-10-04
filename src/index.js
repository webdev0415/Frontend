import React from 'react';
import ReactDOM from 'react-dom';

import {store, persistor} from "./store"
import {Provider} from "react-redux"
import {PersistGate} from "redux-persist/integration/react"
import App from "./App"

ReactDOM.render(
  <Provider store={store}>
		<PersistGate persistor={persistor}>
			<App />
		</PersistGate>
	</Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

