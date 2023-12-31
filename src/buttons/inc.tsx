import {Button} from "@mui/material";

type propsType= {
    number: number| string
    setValue: (counter: number )=> void
    maxValue: number| string
}

export const Inc = (props: propsType)=> {
const onClickHandler = ()=> {
 props.setValue(+props.number+1)
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