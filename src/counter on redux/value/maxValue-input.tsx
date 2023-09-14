import {ChangeEvent} from "react";
import {Input} from "@mui/material";
import {prohibitedKeys} from "../../prohibited keys/prohibited keys";

type propsTypeMaxNumber = {
    maxValue: number | string
    setMaxValue: (value: string) => void
    minValue: number | string
}

export const MaxValueCounter = (props: propsTypeMaxNumber) => {

    prohibitedKeys()
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const { value } = e.currentTarget;
        (+value < 101 && +value >= props.minValue) && props.setMaxValue(value)
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