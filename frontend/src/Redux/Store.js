import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import Reducers from "../Reducers";

export const store = createStore(Reducers, compose(applyMiddleware(thunk)));
