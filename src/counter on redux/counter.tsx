import React from 'react';
import '../App.css';
import {IncCounter} from "./buttons - counter/inc-button";
import {ResetCounter} from "./buttons - counter/reset-button";
import {SetCounter} from "./buttons - counter/set-button";
import {MinValueCounter} from "./value/minValue-input";
import {MaxValueCounter} from "./value/maxValue-input";
import {AppStateType} from "./redux/redux-store";
import {counterReducerType,} from "./redux/counter-reduser";
import {useSelector} from "react-redux";
import {useCustomHooks} from "../hooks/custom hooks";


export const Counter = () => {
    const stateCounter = useSelector<AppStateType, counterReducerType>(state => state.counterOnRedux)

    const styleNumber = {
        color: stateCounter.value === stateCounter.maxValue || stateCounter.maxValue <= stateCounter.minValue || stateCounter.minValue < 0 ? 'red' : '',
        fontSize: stateCounter.value === stateCounter.maxValue || stateCounter.maxValue <= stateCounter.minValue || stateCounter.minValue > 0 ? '45px' : ''
    }
const {
    setMaxValue,
    setMinValue,
    setSet,
    setValue
} = useCustomHooks()


    return (
        <div className="App">
            <div className={'container'}>
                {stateCounter.set && <div className={'counter'}>
                    <div className={'conditions'}>
                        <MaxValueCounter
                            maxValue={stateCounter.maxValue}
                            setMaxValue={setMaxValue}
                            minValue={stateCounter.minValue}
                        />
                        <MinValueCounter
                            maxValue={stateCounter.maxValue}
                            minValue={stateCounter.minValue}
                            setMinValue={setMinValue}
                        />
                    </div>
                    <div className={'button-set'}>
                        <SetCounter
                            set={stateCounter.set}
                            setSet={setSet}
                            maxValue={stateCounter.maxValue}
                            minValue={stateCounter.minValue}/>
                    </div>
                </div>}
                {!stateCounter.set && <div className={'counter'}>
                    <div className={'counterNumber'}>
                        <h2 style={styleNumber}>
                            {stateCounter.minValue >= stateCounter.maxValue || stateCounter.minValue < 0 ? 'Incorrect value!' : stateCounter.value}
                        </h2>
                    </div>
                    <div className={'counterButton'}>
                        <div>
                            <IncCounter
                                maxValue={stateCounter.maxValue}
                                setValue={setValue}
                                number={stateCounter.value}/>
                        </div>
                        <div>
                            <SetCounter
                                set={stateCounter.set}
                                setSet={setSet}
                                minValue={stateCounter.minValue}
                                        maxValue={stateCounter.maxValue}/>
                        </div>
                        <div>
                            <ResetCounter setValue={setValue} value={stateCounter.minValue}/>
                        </div>
                    </div>
                </div>}
            </div>
        </div>
    );
}
