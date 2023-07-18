import i from './condition.module.css'


export const MinValue = () => {


    return (
        <div className={i.condition}>
            <span>minValue:</span>
            <input type={'number'}/>
        </div>
    )
}