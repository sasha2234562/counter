import {ChangeEvent} from "react";
import {Input} from "@mui/material";
import {prohibitedKeys} from "../../prohibited keys/prohibited keys";

type propsTypeMaxNumber = {
    maxValue: number
    setValue: (e: string) => void
    minValue: number
    value: number
    title: string
}

export const MaxMinValue = (props: propsTypeMaxNumber) => {

    prohibitedKeys()
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
       // (+e.currentTarget.value < 101 && +e.currentTarget.value >= props.minValue) &&
        props.setValue(e.currentTarget.value)
    }
    return (
        <div>
            <span>{props.title}:</span>
            <Input
                error={props.minValue >= props.maxValue}
                value={props.value}
                onChange={onChangeHandler}
                type={'number'}/>
        </div>
    )
}