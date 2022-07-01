import {createStore} from 'redux';

//action ={type: "", payload:""}

const defaultState = {
    globalFilter: "",
    setGlobalFilter: () => {
    },
    preGlobalFilteredRows: []
}
const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'SEARCH_INPUT':
            return {
                ...state,
                globalFilter: action.payload.globalFilter,
                setGlobalFilter: action.payload.setGlobalFilter,
                preGlobalFilteredRows: action.payload.preGlobalFilteredRows
            }
        default:
            return state
    }
}

const store = createStore(reducer);

export default store;