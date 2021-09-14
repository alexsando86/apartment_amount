import { ColorModeScript } from "@chakra-ui/react";
import * as React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { App } from "./App";
import rootRecuder from "./reducers";
import rootSaga from "./saga";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootRecuder, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

ReactDOM.render(
	<React.StrictMode>
		<ColorModeScript />
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>,
	document.getElementById("root")
);
