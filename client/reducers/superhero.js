import * as actions from '../actions/superhero';
const initialState = {
    data: null
};


export default function superHero(state = initialState, action) {
    switch (action.type) {
        case actions.RECEIEVE_SUPERHERO:
            return { ...state, data: action.data };
        default:
            return state;
    }
}