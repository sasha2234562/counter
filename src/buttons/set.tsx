import {Button} from "@mui/material";

type propsSetType = {
    minValue: number
    maxValue: number
}
export const Set= (props: propsSetType)=>{
const click = ()=> {
    localStorage.setItem('max', String(props.maxValue))
    localStorage.setItem('min', String(props.minValue))
}
    return(
        <Button onClick={click} variant={'contained'}>set</Button>
    )
}