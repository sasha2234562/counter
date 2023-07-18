import {Button} from "@mui/material";

type propsType= {
    number: number
    setNumber: (counter: number)=> void
}

export const Inc = (props: propsType)=> {
const onClickHandler = ()=> {
 props.setNumber(props.number+1)
}
    return(
            <Button  onClick={onClickHandler} variant="contained" href="#contained-buttons">
                ink
            </Button>
    )
}