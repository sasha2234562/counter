
import {action} from '@storybook/addon-actions'
import {useReducer, useState} from "react";
import {Accordion} from "./accordion";


export default {
    title: 'Accordion',
    component: Accordion
}

const callBack = action('Accordion mode change event field');


const onClick = action('some item clicked');


export type StateType = {
    collapsed: boolean
}

export type ActionType = {
    type: string,

}

const TOGGLE_COLLAPSED = 'TOGGLE_COLLAPSED';



const Reducer = (state: StateType, action: ActionType): StateType => {
    switch (action.type) {
        case TOGGLE_COLLAPSED:
            return {
                ...state,
                collapsed: !state.collapsed
            };
        default:
            throw new Error('Invalid action type');
    }
};
export const MenuCollapsedMode = () => {


    const [value, dispatch] = useReducer(Reducer, {collapsed: true});


    const arrName = [
        {name: 'Sasha', value: 1},
        {name: 'Masha', value: 2},
        {name: 'Dasha', value: 3}
    ]
    return <Accordion
        titleValue={'Menu'}
        collapsed={value}
        on={() => dispatch({ type: TOGGLE_COLLAPSED })}

        items={arrName}
        k={(id) =>alert(`users with ID${id}`)}
    />

}