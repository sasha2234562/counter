import {Button} from "@mui/material";
import React from "react";
type propsType={
    number: number
    reset: (counter: number)=> void
}

export  const Reset = (props: propsType) => {
const resetHandler = ()=> {
props.reset(0)
}
    return (
        <Button onClick={resetHandler} variant="contained">
            Delete
        </Button>
    )
}
