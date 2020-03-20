import axios from 'axios';

export const FETCH_DATA = 'FETCH_DATA';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_ERROR = 'FETCH_DATA_ERROR';

export const getHeroes = () => dispatch => {
    dispatch({ type: FETCH_DATA })
    axios.get('https://api.opendota.com/api/heroStats')
    .then(res => {
        dispatch({ type: FETCH_DATA_SUCCESS, payload: res.data })
    })
    .catch(err => {
        dispatch({ type: FETCH_DATA_ERROR, payload: err.message })
    })
}
