import { FETCH_DATA, FETCH_DATA_SUCCESS, FETCH_DATA_ERROR } from '../actions/dataActions';

const initialState = {
    data: [],
    error: '',
    isFetching: false
}

export const dataReducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_DATA:
            return {
                ...state,
                error: '',
                isFetching: true
            }
        case FETCH_DATA_SUCCESS:
            return {
                ...state,
                data: action.payload,
                error: '',
                isFetching: false
            }
        case FETCH_DATA_ERROR:
            return {
                ...state,
                error: action.payload,
                isFetching: false
            }
        default:
            return state;
    }
}