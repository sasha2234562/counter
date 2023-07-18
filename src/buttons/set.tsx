import {Button} from "@mui/material";


export const Set= (props: {value: number })=>{
const click = ()=> {
    localStorage.setItem(String(props.value), String(props.value))
}
    return(
        <Button onClick={click} variant={'contained'}>set</Button>
    )
}