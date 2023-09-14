import {setMaxValueAC, setMinValueAC, setSetAC, setValueAC, setErrorAC} from "../counter on redux/redux/counter-reduser";
import {useDispatch} from "react-redux";

export const useCustomHooks = () => {

    const dispatch = useDispatch()
    const setMaxValue = (max: string) => {
        dispatch(setMaxValueAC(max))
    }
    const setMinValue = (min: string) => {
        dispatch(setMinValueAC(min))
    }
    const setSet = (value: boolean) => {
        dispatch(setSetAC(value))
    }
    const setValue = (value: number) => {
        dispatch(setValueAC(value))
    }
    const setError = (comparisonResult: boolean)=> {
        dispatch(setErrorAC(comparisonResult))
    }
    return {
        setMaxValue,
        setMinValue,
        setSet,
        setValue,
        setError
    }
}