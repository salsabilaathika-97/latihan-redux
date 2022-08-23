import {createStore} from 'redux';

const authState = {
    data: {
        name: "Salsa",
        avatar: "https://reqres.in/img/faces/7-image.jpg"
    },
};


// berfungsi untuk memasukkan state ke dalam store
const authReducer = (state = authState) => {
    return state;
}

export const store = createStore(authReducer);
