import {combineReducers, createStore} from "redux";
import {counterReduser} from "./counter-reduser";


let reducers = combineReducers({
    counterOnRedux: counterReduser
});

export type AppStateType = ReturnType<typeof reducers>;


export let store = createStore(reducers);

store.subscribe(() => {
    localStorage.setItem('max-value', JSON.stringify(store.getState().counterOnRedux.maxValue))
    localStorage.setItem('min-value', JSON.stringify(store.getState().counterOnRedux.minValue))
})
