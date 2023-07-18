import {Button} from "@mui/material";

type propsType= {
    error: boolean
    number: number
    setValue: (counter: number)=> void
    maxValue: number
}

export const Inc = (props: propsType)=> {
const onClickHandler = ()=> {
 props.setValue(props.number+1)
}
    return(
            <Button
                disabled={props.maxValue === props.number}
                onClick={onClickHandler}
                variant="contained"
                href="#contained-buttons">
                ink
            </Button>
    )
}