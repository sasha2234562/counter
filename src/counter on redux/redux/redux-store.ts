import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import {counterReduser} from "./counter-reduser";
import {loadState, saveState} from "../../utils/local-storage-utils";


let reducers = combineReducers({
    counterOnRedux: counterReduser
});

export type AppStateType = ReturnType<typeof reducers>;


export let store = createStore(reducers,loadState(), applyMiddleware(thunk));

store.subscribe(() => {
    localStorage.setItem('max-value', JSON.stringify(store.getState().counterOnRedux.maxValue))
    localStorage.setItem('min-value', JSON.stringify(store.getState().counterOnRedux.minValue))
    saveState({
        maxValue: store.getState().counterOnRedux.maxValue
    });
})
