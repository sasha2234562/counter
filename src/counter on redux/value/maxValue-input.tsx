import {ChangeEvent} from "react";
import {Input} from "@mui/material";
import {prohibitedKeys} from "../../prohibited keys/prohibited keys";

type propsTypeMaxNumber = {
    maxValue: number
    setMaxValue: (value: string) => void
    minValue: number
}

export const MaxValueCounter = (props: propsTypeMaxNumber) => {

    prohibitedKeys()
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        (+e.currentTarget.value < 101 && +e.currentTarget.value >= props.minValue) && props.setMaxValue(e.currentTarget.value)
    }
    return (
        <div>
            <span>max value:</span>
            <Input
                error={props.minValue >= props.maxValue}
                value={props.maxValue}
                onChange={onChangeHandler}
                type={'number'}/>
        </div>
    )
}