import * as React from "react";
import * as ReactDOM from "react-dom";

import { Provider } from "react-redux";
import { Action, createStore } from "redux";
// tslint:disable-next-line:no-implicit-dependencies
import { composeWithDevTools } from "redux-devtools-extension";
import {DictionaryAction} from "./actions";
import DictionaryCollection from "./containers/DictionaryCollectionContainer";
import { dictionary } from "./reducers/index";
import { IStoreState } from "./types/IStoreState";

import "./index.css";

const store = createStore<IStoreState, DictionaryAction, {}, {}>(dictionary, {
  dictionaries: [],
}, composeWithDevTools());

ReactDOM.render(
  <Provider store={store}>
    <DictionaryCollection />
  </Provider>,
  document.getElementById("root") as HTMLElement,
);
