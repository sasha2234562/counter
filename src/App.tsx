import React, {useState} from 'react';
import './App.css';
import {Inc} from "./buttons/inc";
import {Reset} from "./buttons/reset";
import {Set} from "./buttons/set";
import {MaxValue} from "./conditions/maxValue";
import {MinValue} from "./conditions/minValue";

function App() {

    const [number, setNumber] = useState<number>(0);
    const [maxNumber, setMaxNumber] = useState<number>(0);
    const [minNumber, setMinNumber] = useState<number>(0);

    const [error, setError] = useState(false)
    const styleNumber = {
        color: number > 4 ? 'red' : ''
    }
    const changeMaxNumber = (e: string) => {
        setMaxNumber(Number(e))
    }
    const changeMinNumber = (e: string) => {
        setMinNumber(Number(e))
    }
    return (
        <div className="App">
            <div className={'container'}>
                <div className={'counter'}>
                    <div className={'conditions'}>
                        <MaxValue maxNumber={maxNumber} changeMaxNumber={changeMaxNumber}/>
                        <MinValue minNumber={minNumber} changeMinNumber={changeMinNumber}/>
                    </div>
                    <div className={'button-set'}>
                        <Set value={number}/>
                    </div>
                </div>
                <div className={'counter'}>
                    <div className={'counterNumber'}>
                        <h2 style={styleNumber}>{number}</h2>
                    </div>
                    <div className={'counterButton'}>
                        <div>
                            <Inc setNumber={setNumber} number={number}/>
                        </div>
                        <div>
                            <Reset reset={setNumber} number={number}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
