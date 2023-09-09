const SET_MAX_VALUE = 'SET_MAX_VALUE'
const SET_MIN_VALUE = 'SET_MIN_VALUE'
const SET_ERROR = 'SET-ERROR'
const SET_SET = 'SET_SET'
const SET_VALUE = 'SET_VALUE'


export type counterReducerType = {
    maxValue: number | string
    minValue: number | string
    value: number | string
    error: null | boolean
    set: boolean
}
export const initialState: counterReducerType = {
    maxValue: Number(localStorage.getItem('max-value')) || 0,
    minValue: Number(localStorage.getItem('min-value')) || 0,
    value: Number(localStorage.getItem('min-value')) || 0,
    error: null,
    set: false
}

export const counterReduser = (state: counterReducerType = initialState, action: actionType): counterReducerType => {
    switch (action.type) {
        case SET_MAX_VALUE:
            return {
                ...state,
                maxValue: +action.e || ''
            }
        case SET_MIN_VALUE:
            return {
                ...state,
                minValue: +action.e || ''
            }
        case SET_SET:
            return {
                ...state,
                set: action.set
            }
        case SET_VALUE:
            return {
                ...state, value: action.value
            }
    }
    return state
}

export const setMaxValueAC = (e: string) => ({type: SET_MAX_VALUE, e} as const)
export const setMinValueAC = (e: string) => ({type: SET_MIN_VALUE, e} as const)
export const setErrorAC = (comparisonResult: boolean) => ({type: SET_ERROR, comparisonResult} as const)
export const setSetAC = (set: boolean) => ({type: SET_SET, set} as const)
export const setValueAC = (value: number | string) => ({type: SET_VALUE, value} as const)

type setMaxValueACType = ReturnType<typeof setMaxValueAC>
type setMinValueACType = ReturnType<typeof setMinValueAC>
type setSetType = ReturnType<typeof setSetAC>
type setValueType = ReturnType<typeof setValueAC>

type actionType = setMaxValueACType | setMinValueACType | setSetType | setValueType