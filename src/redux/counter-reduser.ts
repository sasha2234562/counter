

const SET_MAX_VALUE = 'SET_MAX_VALUE'
const SET_MIN_VALUE = 'SET_MIN_VALUE'
const SET_ERROR = 'SET-ERROR'
const SET_SET = 'SET_SET'


type counterReduserType = {
    maxValue: number
    minValue: number
    value: number
    error: null | boolean
    set: boolean
}

export const initialState = {
    maxValue: 0,
    minValue: 0,
    value: 0,
    error: null ,
    set: false
}

export const counterReduser = (state = initialState, action: actionType) : counterReduserType=> {
    switch (action.type) {
        case SET_MAX_VALUE:
            return {
                ...state,
                maxValue: +action.e
            }
        case SET_MIN_VALUE:
            return {
                ...state,
                minValue: +action.e
            }
        case SET_ERROR:
            return {
                ...state,
                error: action.comparisonResult
            }
        case SET_SET:
            return {
                ...state,
                set: action.set
            }
    }
    return state
}

const setMaxValueAC = (e: string)=> ({type: SET_MAX_VALUE, e} as  const)
const setMinValueAC = (e: string) => ({ type : SET_MIN_VALUE, e} as const)
const setErrorAC = (comparisonResult: boolean)=> ({type: SET_ERROR, comparisonResult} as const)
const setSetAC = (set: boolean)=> ({type: SET_SET, set} as const)

type setMaxValueACType  = ReturnType<typeof setMaxValueAC>
type setMinValueACType = ReturnType<typeof setMinValueAC>
type setErrorACType = ReturnType<typeof setErrorAC>
type setSetType = ReturnType<typeof setSetAC>

type actionType = setMaxValueACType | setMinValueACType | setErrorACType | setSetType