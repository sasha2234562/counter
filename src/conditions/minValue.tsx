import i from './condition.module.css'
import {ChangeEvent} from "react";

type propsMinValueType= {
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
            <input
                value={props.minValue}
                onChange={onChangeHandler}
                type={'number'}/>
        </div>
    )
}