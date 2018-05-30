const initialState = {
    guests: ['Tony Stark', 'Steve Rodgers', ' Nick Fury', 'Natasha Romanova', 'Clint Barton', 'Bruce Banner', 'Wanda Maximoff']
}

const ADD_GUEST = 'ADD_GUEST';
const REMOVE_GUEST = 'REMOVE_GUEST';

export default function reducer(state = initialState, action ) {

    switch (action.type){
        case ADD_GUEST:
            return Object.assign({}, state, {guests: [...state.guests, action.payload]})

        case REMOVE_GUEST:
            let newGuestList = state.guests.filter( guest => guest !== action.payload)
            return Object.assign({}, state, {guests: newGuestList})

        default:
            return state;
    }

}

export function addGuest(guestName){
    return {
        type: ADD_GUEST,
        payload: guestName
    }
}

export function removeGuest(guestName){
    return {
        type: REMOVE_GUEST,
        payload: guestName
    }
}