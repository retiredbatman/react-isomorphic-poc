import * as actions from '../actions/superHeros';
const initialState = {
    data: []
};


export default function superHeros(state = initialState, action) {
    switch (action.type) {
        case actions.RECEIEVE_SUPERHEROS:
            return { ...state, data: action.data };
        default:
            return state;
    }
}