import i from './condition.module.css'
import {ChangeEvent} from "react";
import {Input} from "@mui/material";

type propsTypeMaxNumber= {
    maxValue: number
    changeMaxValue: (value: string)=>void
    minValue: number
}

export const MaxValue = (props: propsTypeMaxNumber) => {

    const onChangeHandler= (e: ChangeEvent<HTMLInputElement>)=>{
        props.changeMaxValue(e.currentTarget.value)


    }
    return (
        <div className={i.condition}>
            <span>max value:</span>
            <Input
                error={props.minValue === props.maxValue}
                value={props.maxValue}
                onChange={onChangeHandler}
                type={'number'}/>
        </div>
    )
}