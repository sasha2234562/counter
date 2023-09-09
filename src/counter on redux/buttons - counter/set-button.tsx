import {Button} from "@mui/material";

type propsSetType = {
    minValue: number
    maxValue: number
    setSet: (value: boolean) => void
    set: boolean
    // thunkCreator: (maxValue: number, minValue: number) => void
}
export const SetCounter = (props: propsSetType) => {
    const click = () => {
        // props.thunkCreator(props.maxValue, props.minValue)
        props.setSet(!props.set)
    }
    return (
        <Button onClick={click} variant={'contained'}>set</Button>
    )
}