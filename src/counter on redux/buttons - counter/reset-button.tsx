import {Button} from "@mui/material";
import React from "react";

type propsType={
    value: number| string
    setValue: (counter: number )=> void
}

export  const ResetCounter = (props: propsType) => {
    const resetHandler = ()=> {
        props.setValue(+props.value)
    }
    return (
        <Button onClick={resetHandler} variant="contained">
            reset
        </Button>
    )
}
