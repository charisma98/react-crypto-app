import { combineReducers } from 'redux';


const eventReducer = (state=[], action) => {
    const { type, payload } = action;
    
    switch(type) {
        case 'GET_EVENTS':
            return payload.data
        default:
            return state
    }
}

const statusUpdatesReducer = (state=[], action) => {
    const { type, payload } = action;

    switch(type) {
        case 'GET_STATUS_UPDATES':
            console.log(payload)
            return payload.status_updates
        default: 
            return state
    }
}

export const rootReducer = combineReducers({
    events: eventReducer,
    status_updates: statusUpdatesReducer
})