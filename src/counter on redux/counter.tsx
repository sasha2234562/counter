import React from 'react';
import '../App.css';
import {Dispatch} from "redux";
import {IncCounter} from "./buttons - counter/inc-button";
import {ResetCounter} from "./buttons - counter/reset-button";
import {SetCounter} from "./buttons - counter/set-button";
import {MinValueCounter} from "./value/minValue-input";
import {MaxValueCounter} from "./value/maxValue-input";
import {AppStateType} from "./redux/redux-store";
import {setErrorAC, setMaxValueAC, setMinValueAC, setSetAC, setValueAC} from "./redux/counter-reduser";
import {connect} from "react-redux";

type mapStateToPropsType = {
    value: number
    maxValue: number
    minValue: number
    error: boolean | null
    set: boolean
}
type mapDispatchToPropsType = {
    setMaxValue: (e: string)=> void
    setMinValue: (e: string)=> void
    setError: (comparisonResult: boolean)=> void
    setSet: (value: boolean)=> void
    setValue: (value: number)=> void
}
type  propsType = mapStateToPropsType & mapDispatchToPropsType

export const Counter = (props: propsType)=> {

    const styleNumber = {
        color: props.value === props.maxValue || props.maxValue <= props.minValue || props.minValue < 0 ? 'red' : '',
        fontSize: props.value === props.maxValue || props.maxValue <= props.minValue || props.minValue > 0 ? '28px' : ''
    }

      return (
        <div className="App">
            <div className={'container'}>
                {props.set && <div className={'counter'}>
                    <div className={'conditions'}>
                        <MaxValueCounter
                            maxValue={props.maxValue}
                            setMaxValue={props.setMaxValue}
                            // changeMaxValue={changeMaxNumber}
                            minValue={props.minValue}
                        />
                        <MinValueCounter
                            maxValue={props.maxValue}
                            minValue={props.minValue}
                            setMinValue={props.setMinValue}
                        />
                    </div>
                    <div className={'button-set'}>
                        <SetCounter set={props.set} setSet={props.setSet} maxValue={props.maxValue} minValue={props.minValue}/>
                    </div>
                </div>}
                {!props.set && <div className={'counter'}>
                    <div className={'counterNumber'}>
                        <h2 style={styleNumber}>
                            {props.minValue >= props.maxValue || props.minValue < 0 ? 'Incorrect value!' : props.value}
                        </h2>
                    </div>
                    <div className={'counterButton'}>
                        <div>
                            <IncCounter
                                maxValue={props.maxValue}
                                setValue={props.setValue}
                                number={props.value}/>
                        </div>
                        <div>
                            <SetCounter set={props.set} setSet={props.setSet} minValue={props.minValue} maxValue={props.maxValue}/>
                        </div>
                        <div>
                            <ResetCounter reset={props.setValue} number={props.value}/>
                        </div>
                    </div>
                </div>}
            </div>
        </div>
    );
}

// export const Counter2 = ()=>  {
//
//
//     const [value, setValue] = useState<number>(0);
//     const [maxValue, setMaxValue] = useState<number>(0);
//     const [minValue, setMinValue] = useState<number>(0);
//
//     const [error, setError] = useState<boolean | null>(null);
//     const [set, setSet] = useState(false);
//
//
//     useEffect(() => {
//         let getLocal = localStorage.getItem(`max`);
//         if (getLocal) {
//             let num = JSON.parse(getLocal)
//             setMaxValue(num)
//         }
//
//
//     }, [])
//
//     useEffect(() => {
//         let getLocal = localStorage.getItem('min');
//         if (getLocal) {
//             let num = JSON.parse(getLocal);
//             setMinValue(num)
//         }
//     }, [])
//     const styleNumber = {
//         color: value === maxValue || maxValue <= minValue || minValue < 0 ? 'red' : '',
//         fontSize: value === maxValue || maxValue <= minValue || minValue > 0 ? '28px' : ''
//     }
//     const changeMaxNumber = (e: string) => {
//         setMaxValue(Number(e))
//         setError(maxValue === minValue)
//     }
//     const changeMinNumber = (e: string) => {
//         setMinValue(Number(e))
//         setError(maxValue === minValue)
//         if (minValue !== value) {
//             setValue(minValue)
//         }
//     }
//     return (
//         <div className="App">
//             <div className={'container'}>
//                 {set && <div className={'counter'}>
//                     <div className={'conditions'}>
//                         <MaxValueCounter
//                             maxValue={maxValue}
//                             changeMaxValue={changeMaxNumber}
//                             minValue={minValue}
//                         />
//                         <MinValueCounter maxValue={maxValue} minValue={minValue} changeMinValue={changeMinNumber}/>
//                     </div>
//                     <div className={'button-set'}>
//                         <SetCounter set={set} setSet={setSet} maxValue={maxValue} minValue={minValue}/>
//                     </div>
//                 </div>}
//                 {!set && <div className={'counter'}>
//                     <div className={'counterNumber'}>
//                         <h2 style={styleNumber}>
//                             {minValue >= maxValue || minValue < 0 ? 'Incorrect value!' : value}
//                         </h2>
//                     </div>
//                     <div className={'counterButton'}>
//                         <div>
//                             <IncCounter
//                                 maxValue={maxValue}
//                                 setValue={setValue}
//                                 number={value}/>
//                         </div>
//                         <div>
//                             <SetCounter set={set} setSet={setSet} minValue={minValue} maxValue={maxValue}/>
//                         </div>
//                         <div>
//                             <ResetCounter reset={setValue} number={value}/>
//                         </div>
//                     </div>
//                 </div>}
//             </div>
//         </div>
//     );
// }


const MapStateToProps = (state: AppStateType)=> {
    return{
        value: state.counterOnRedux.value,
        maxValue: state.counterOnRedux.maxValue,
        minValue: state.counterOnRedux.minValue,
        error: state.counterOnRedux.error,
        set: state.counterOnRedux.set
    }
}
const MapDispatchToProps = (dispatch: Dispatch) => {
    return{
        setMaxValue: (e: string)=> {
            dispatch(setMaxValueAC(e))
        },
        setMinValue : (e : string)=> {
            dispatch(setMinValueAC(e))
        },
        setError: (comparisonResult: boolean)=> {
            dispatch(setErrorAC(comparisonResult))
        },
        setSet: (value: boolean)=> {
            dispatch(setSetAC(value))
        },
        setValue(value: number) {
            dispatch(setValueAC(value))
        }
    }
}

export  const CounterConteiner = connect(MapStateToProps, MapDispatchToProps)(Counter)