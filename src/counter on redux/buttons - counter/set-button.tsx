import {Button} from "@mui/material";

type propsSetType = {
    minValue: number
    maxValue: number
    setSet: (value: boolean) => void
    set: boolean
}
export const SetCounter = (props: propsSetType) => {
    const click = () => {
        localStorage.setItem('max', String(props.maxValue))
        localStorage.setItem('min', String(props.minValue))
        props.setSet(!props.set)
    }
    return (
        <Button onClick={click} variant={'contained'}>set</Button>
    )
}