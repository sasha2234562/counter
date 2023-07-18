import i from './condition.module.css'
import {ChangeEvent} from "react";

type propsTypeMaxNumber= {
    maxValue: number
    changeMaxValue: (value: string)=>void
}

export const MaxValue = (props: propsTypeMaxNumber) => {

    const onChangeHandler= (e: ChangeEvent<HTMLInputElement>)=>{
        props.changeMaxValue(e.currentTarget.value)
    }
    return (
        <div className={i.condition}>
            <span>max value:</span>
            <input
                value={props.maxValue}
                onChange={onChangeHandler}
                type={'number'}/>
        </div>
    )
}