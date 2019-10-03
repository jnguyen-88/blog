import jsonPh from '../API/jsonPh';
import ReduxThunk from 'redux-thunk';

// Defining a function that returns an inner-func
export const fetchPosts = () => async dispatch => {
    const res = await jsonPh.get('/posts');
    // dispatch func sends actions to MW and Reducers
    dispatch({type: 'FETCH_POSTS', payload: res.data });
};



export const fetchUser = (id) => { 
    return async (dispatch) => {
        const res = await jsonPh.get('/users/' + id);
        dispatch({type: 'FETCH_USER', payload: res.data});
    }
}
