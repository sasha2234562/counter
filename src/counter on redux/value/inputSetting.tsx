import {ChangeEvent} from "react";
import {TextField} from "@mui/material";

type propsMinValueType = {
    value: number | string
    name: string
    error: boolean
    updateInput: (e: ChangeEvent<HTMLInputElement>) => void
}
export const InputSetting = (props: propsMinValueType) => {

    return (
        <div>
            <span>value: {props.name}</span>
            <TextField
                style={{
                    width: '150px',
                    marginLeft: '10px',
                    height: '17px'
                }}
                name={props.name}
                error={props.error}
                value={props.value}
                onChange={props.updateInput}
                inputProps={{max: 100, min: 0}}
                type={'number'}/>
        </div>
    )

}