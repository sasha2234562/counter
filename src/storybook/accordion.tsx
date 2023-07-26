import {StateType} from "./Accordion.stories";

type AccordionPropsType = {
    titleValue: string
    collapsed: StateType
    on: ()=> void
    items: Array<{name: string, value: number}>
    k: (id: number)=> void
}

export  const Accordion=(props: AccordionPropsType)=> {
    console.log({collapsed: props.collapsed})
    return(
        <div>

            <AccordionTitle
                title={props.titleValue}
                on={props.on}
            />
            {!props.collapsed.collapsed && <AccordionBody items={props.items} k={props.k}/>}
        </div>
    )
}
type AccordionTitlePropsType={
    title: string
    on: ()=> void
}
function AccordionTitle(props: AccordionTitlePropsType){
    return(
        <h3 onClick={props.on}>{props.title}</h3>
    )
}

type AccordionBodyPropsType = {
    items: Array<{name: string, value: number}>
    k: (id: number)=> void
}
function AccordionBody(props: AccordionBodyPropsType){

    return(
        <ul>
            {props.items?.map((item, index)=> {
                return (
                    <li key={index} onClick={()=>props.k(item.value)}>{item.name}</li>
                )
            })}
        </ul>
    )
}
