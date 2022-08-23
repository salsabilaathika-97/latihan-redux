import {createStore} from 'redux';

const initState = {
    auth: {
        isAuth: false,
    },
};

const fakeFunction = () => {
    return true;
}

export const store = createStore(fakeFunction,initState);
