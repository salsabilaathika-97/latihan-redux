import {createStore} from 'redux';

const authState = {
    auth: {
        isAuth: false,
    },
};


// berfungsi untuk memasukkan state ke dalam store
const authReducer = (state = authState) => {
    return state;
}

export const store = createStore(authReducer);
