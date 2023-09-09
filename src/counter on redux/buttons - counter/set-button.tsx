import {Button} from "@mui/material";

type propsSetType = {
    minValue: number | string
    maxValue: number | string
    setSet: (value: boolean) => void
    set: boolean
}
export const SetCounter = (props: propsSetType) => {
    const click = () => {
        props.setSet(!props.set)
    }
    return (
        <Button onClick={click} variant={'contained'}>set</Button>
    )
}