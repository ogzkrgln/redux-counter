import {ARTTIR, AZALT} from '../action/index';

const initialState = {
    sayi: 0
};

function handleChange(state, change) {
    const {sayi} = state;
    return ({
      sayi: sayi + change,
    })
  }

export default function counter(state=initialState,action) {
    switch(action.type) {
        case ARTTIR:
            return handleChange(state, 1);
        case AZALT:
            return handleChange(state, -1);
        default: 
            return state;
    }
}