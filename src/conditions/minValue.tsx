import i from './condition.module.css'
import {ChangeEvent} from "react";
import {Input} from "@mui/material";

type propsMinValueType= {
    maxValue: number
    minValue: number
    changeMinValue: (e: string)=>void
}
export const MinValue = (props: propsMinValueType) => {

const onChangeHandler= (e: ChangeEvent<HTMLInputElement>)=> {
    props.changeMinValue(e.currentTarget.value)
}
    return (
        <div className={i.condition}>
            <span>min value:</span>
            <Input
                error={props.minValue === props.maxValue}
                value={props.minValue}
                onChange={onChangeHandler}
                type={'number'}/>
        </div>
    )
}