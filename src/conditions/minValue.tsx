import i from './condition.module.css'
import {ChangeEvent} from "react";

type propsMinValueType= {
    minNumber: number
    changeMinNumber: (e: string)=>void
}
export const MinValue = (props: propsMinValueType) => {

const onChangeHandler= (e: ChangeEvent<HTMLInputElement>)=> {
    props.changeMinNumber(e.currentTarget.value)
}
    return (
        <div className={i.condition}>
            <span>min value:</span>
            <input
                onChange={onChangeHandler}
                type={'number'}/>
        </div>
    )
}