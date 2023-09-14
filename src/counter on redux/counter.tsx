import React, {ChangeEvent} from 'react';
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
import {InputSetting} from "./value/inputSetting";


export const Counter = () => {
    const stateCounter = useSelector<AppStateType, counterReducerType>(state => state.counterOnRedux)
    const maxValue = stateCounter.maxValue
    const minValue = stateCounter.minValue
    const value = stateCounter.value
    const set = stateCounter.set
    const error = stateCounter.error;

    const styleNumber = {
        color: value === maxValue || maxValue <= minValue || minValue < 0 ? 'red' : '',
        fontSize: value === maxValue || maxValue <= minValue || minValue > 0 ? '45px' : ''
    }
    const {
        setMaxValue,
        setMinValue,
        setSet,
        setValue,
        setError
    } = useCustomHooks()


    const changeInput = (e: ChangeEvent<HTMLInputElement>) => {
        const {value, name} = e.currentTarget;

        switch (name) {
            case 'min':
                if (+value === maxValue) {
                    setError(true)
                    setMinValue(value)
                } else if (value > maxValue) {
                    return
                } else {
                    setError(false)
                    setMinValue(value)
                }
                break;
            case 'max':
                if (value > minValue) {
                    setError(false)
                }
                if (+value === minValue) {
                    setError(true)
                } else if (value < minValue) {
                    return;
                }
                setMaxValue(value);
                break;
        }
    }

    return (
        <div className="App">
            <div className={'container'}>
                {set && <div className={'counter'}>
                    <div className={'conditions'}>
                        <InputSetting value={+maxValue} name={'max'} error={error ?? false} updateInput={changeInput}/>
                        <InputSetting value={+minValue} name={'min'} error={error ?? false} updateInput={changeInput}/>
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
