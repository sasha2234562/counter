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
    const maxValue = stateCounter.maxValue
    const minValue = stateCounter.minValue
    const value = stateCounter.value
    const set = stateCounter.set

    const styleNumber = {
        color: value === maxValue || maxValue <= minValue || minValue < 0 ? 'red' : '',
        fontSize: value === maxValue || maxValue <= minValue || minValue > 0 ? '45px' : ''
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
                {set && <div className={'counter'}>
                    <div className={'conditions'}>
                        {/*<MaxMinValue*/}
                        {/*    maxValue={maxValue}*/}
                        {/*    value={maxValue}*/}
                        {/*    setValue={setMaxValue}*/}
                        {/*    title={'max value'}*/}
                        {/*    minValue={minValue}/>*/}
                        {/*<MaxMinValue*/}
                        {/*    maxValue={maxValue}*/}
                        {/*    title={'min value'}*/}
                        {/*    value={minValue}*/}
                        {/*    setValue={setMinValue}*/}
                        {/*    minValue={minValue}/>*/}
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
                            set={set}
                            setSet={setSet}
                            maxValue={maxValue}
                            minValue={minValue}/>
                    </div>
                </div>}
                {!set && <div className={'counter'}>
                    <div className={'counterNumber'}>
                        <h2 style={styleNumber}>
                            {minValue >= maxValue || minValue < 0 ? 'Incorrect value!' : value}
                        </h2>
                    </div>
                    <div className={'counterButton'}>
                        <div>
                            <IncCounter
                                maxValue={maxValue}
                                setValue={setValue}
                                number={value}/>
                        </div>
                        <div>
                            <SetCounter
                                set={set}
                                setSet={setSet}
                                minValue={minValue}
                                maxValue={maxValue}/>
                        </div>
                        <div>
                            <ResetCounter setValue={setValue} value={minValue}/>
                        </div>
                    </div>
                </div>}
            </div>
        </div>
    );
}
