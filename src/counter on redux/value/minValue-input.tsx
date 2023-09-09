import {ChangeEvent} from "react";
import {Input} from "@mui/material";
import {prohibitedKeys} from "../../prohibited keys/prohibited keys";

type propsMinValueType = {
    maxValue: number
    minValue: number
    setMinValue: (min: string) => void
}
export const MinValueCounter = (props: propsMinValueType) => {

    prohibitedKeys()
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        (+e.currentTarget.value > -10 && +e.currentTarget.value <= props.maxValue) && props.setMinValue(e.currentTarget.value)
    }
    return (
        <div>
            <span>min value:</span>
            <Input
                error={props.minValue === props.maxValue || props.minValue < 0}
                value={props.minValue}
                onChange={onChangeHandler}
                type={'number'}/>
        </div>
    )

}