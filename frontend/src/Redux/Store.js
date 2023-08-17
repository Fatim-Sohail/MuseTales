import { applyMiddleware, compose } from "redux";
import { createStore } from '@reduxjs/toolkit';
import thunk from "redux-thunk";
import Reducers from "../Reducers";

export const store = createStore(Reducers, compose(applyMiddleware(thunk)));
