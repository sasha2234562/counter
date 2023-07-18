import i from './condition.module.css'

export const MaxValue = () => {

    return (
        <div className={i.condition}>
            <span>max value:</span>
            <input type={'number'}/>
        </div>
    )
}