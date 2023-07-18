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

    const [error, setError] = useState<boolean>(false);



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
        color: value === maxValue ? 'red' : ''
    }
    const changeMaxNumber = (e: string) => {
        setMaxValue(Number(e))
    }
    const changeMinNumber = (e: string) => {
        setMinValue(Number(e))
    }
    return (
        <div className="App">
            <div className={'container'}>
                <div className={'counter'}>
                    <div className={'conditions'}>
                        <MaxValue maxValue={maxValue} changeMaxValue={changeMaxNumber}/>
                        <MinValue minValue={minValue} changeMinValue={changeMinNumber}/>
                    </div>
                    <div className={'button-set'}>
                        <Set maxValue={maxValue} minValue={minValue}/>
                    </div>
                </div>
                <div className={'counter'}>
                    <div className={'counterNumber'}>
                        <h2 style={styleNumber}>{value}</h2>
                    </div>
                    <div className={'counterButton'}>
                        <div>
                            <Inc
                                maxValue={maxValue}
                                setValue={setValue}
                                number={minValue}
                                error={error}/>
                        </div>
                        <div>
                            <Reset reset={setValue} number={value}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
