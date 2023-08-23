import {ChangeEvent} from "react";
import {Input} from "@mui/material";

type propsMinValueType= {
    maxValue: number
    minValue: number
    setMinValue: (e: string)=>void
}
export const MinValueCounter = (props: propsMinValueType) => {

    const onChangeHandler= (e: ChangeEvent<HTMLInputElement>)=> {
        props.setMinValue(e.currentTarget.value)
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