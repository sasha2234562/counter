import {ChangeEvent} from "react";
import {Input} from "@mui/material";

type propsTypeMaxNumber= {
    maxValue: number
    setMaxValue: (value: string)=>void
    minValue: number
}

export const MaxValueCounter = (props: propsTypeMaxNumber) => {

    const onChangeHandler= (e: ChangeEvent<HTMLInputElement>)=>{
        props.setMaxValue(e.currentTarget.value)


    }
    return (
        <div >
            <span>max value:</span>
            <Input
                error={props.minValue >= props.maxValue}
                value={props.maxValue}
                onChange={onChangeHandler}
                type={'number'}/>
        </div>
    )
}