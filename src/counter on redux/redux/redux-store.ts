import { combineReducers, createStore } from "redux";
import {counterReduser} from "./counter-reduser";


let reducers = combineReducers({
    counterOnRedux: counterReduser
});

export type AppStateType = ReturnType<typeof reducers>;

export let store = createStore(reducers);