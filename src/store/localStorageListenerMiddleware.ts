import { createListenerMiddleware } from "@reduxjs/toolkit";
import { localStorageHelpers } from '../utils/localStorageHelpers';

import { setFavorites, addToFavorites, deleteFromFavorites } from "./slices/favoritesSlice";
import { logIn } from "./slices/userSlice";

import { init } from "./actions/init";

const localStorageListenerMiddleware = createListenerMiddleware()

localStorageListenerMiddleware.startListening({
    actionCreator: init,

    effect: (action, listenerApi) => {
        // Action doest not fire on reload
        console.log('fire action')
        action.payload = undefined;
        const email = localStorageHelpers.getAuth();
        if(email){
            const user = localStorageHelpers.getUser(email);
            listenerApi.dispatch(logIn(user))
            listenerApi.dispatch(setFavorites(user?.favorites))
        }
    }
})

localStorageListenerMiddleware.startListening({
    actionCreator: logIn,

    effect: (action) => {
        localStorageHelpers.setUser(action.payload.email, action.payload)
        localStorageHelpers.setAuth(action.payload.email)
    }
})

localStorageListenerMiddleware.startListening({
    actionCreator: addToFavorites,

    effect: (action) => {
        const email = localStorageHelpers.getAuth();
        if(email) {
            localStorageHelpers.addToFavorites(email, action.payload)
        }
    }
})

localStorageListenerMiddleware.startListening({
    actionCreator: deleteFromFavorites,

    effect: (action) => {
        const email = localStorageHelpers.getAuth()
        if(email){
            localStorageHelpers.deleteFromFavorites(email, action.payload)
        }
    }
})

export { localStorageListenerMiddleware }