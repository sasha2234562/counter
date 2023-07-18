import i from './condition.module.css'
import {ChangeEvent} from "react";

type propsTypeMaxNumber= {
    maxNumber: number
    changeMaxNumber: (value: string)=>void
}

export const MaxValue = (props: propsTypeMaxNumber) => {

    const onChangeHandler= (e: ChangeEvent<HTMLInputElement>)=>{
        props.changeMaxNumber(e.currentTarget.value)
    }
    return (
        <div className={i.condition}>
            <span>max value:</span>
            <input
                value={props.maxNumber? props.maxNumber: ''}
                onChange={onChangeHandler}
                type={'number'}/>
        </div>
    )
}