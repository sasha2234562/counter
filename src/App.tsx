import React, {useEffect, useState} from 'react';
import './App.css';
import {Inc} from "./buttons/inc";
import {Reset} from "./buttons/reset";
import {Set} from "./buttons/set";
import {MaxValue} from "./conditions/maxValue";
import {MinValue} from "./conditions/minValue";

function App() {


    const [value, setValue] = useState<number>(0);
    const [maxValue, setMaxValue] = useState<number>(0);
    const [minValue, setMinValue] = useState<number>(0);

    const [error, setError] = useState<boolean | null>(null);
    const [set, setSet] = useState(false);


    useEffect(() => {
        let getLocal = localStorage.getItem(`max`);
        if (getLocal) {
            let num = JSON.parse(getLocal)
            setMaxValue(num)
        }


    }, [])

    useEffect(() => {
        let getLocal = localStorage.getItem('min');
        if (getLocal) {
            let num = JSON.parse(getLocal);
            setMinValue(num)
        }
    }, [])
    const styleNumber = {
        color: value === maxValue || maxValue <= minValue || minValue < 0 ? 'red' : '',
        fontSize: value === maxValue || maxValue <= minValue || minValue > 0 ? '28px' : ''
    }
    const changeMaxNumber = (e: string) => {
        setMaxValue(Number(e))
        setError(maxValue === minValue)
    }
    const changeMinNumber = (e: string) => {
        setMinValue(Number(e))
        setError(maxValue === minValue)
        if (minValue !== value) {
            setValue(minValue)
        }
    }
    return (
        <div className="App">
            <div className={'container'}>
                {set && <div className={'counter'}>
                    <div className={'conditions'}>
                        <MaxValue
                            maxValue={maxValue}
                            changeMaxValue={changeMaxNumber}
                            minValue={minValue}
                        />
                        <MinValue maxValue={maxValue} minValue={minValue} changeMinValue={changeMinNumber}/>
                    </div>
                    <div className={'button-set'}>
                        <Set set={set} setSet={setSet} maxValue={maxValue} minValue={minValue}/>
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
                            <Inc
                                maxValue={maxValue}
                                setValue={setValue}
                                number={value}/>
                        </div>
                        <div>
                            <Set set={set} setSet={setSet} minValue={minValue} maxValue={maxValue}/>
                        </div>
                        <div>
                            <Reset reset={setValue} number={value}/>
                        </div>
                    </div>
                </div>}
            </div>
        </div>
    );
}

export default App;
