// import modules from "./modules";
import {legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from "redux-thunk";
import AsyncStorage from '@react-native-async-storage/async-storage'
import {persistReducer, persistStore} from "redux-persist";
import {modules} from "./modules";

const reduxReducer = () =>{
    let obj = {}
    for (const key in modules) {
        let reducer = modules[key].mutations
        for (const r in reducer) obj[`${key}/${r}`] = reducer[r]
    }
    return obj
}

export const reduxAction = () =>{
    let obj = {}
    for (const key in modules) {
        let actions = modules[key].actions
        for (const r in actions) obj[`${key}/${r}`] = actions[r]
    }
    return obj
}

export const reduxGetters = () =>{
    let obj = {}
    for (const key in modules) {
        let getters = modules[key].getters
        for (const r in getters) obj[`${key}/${r}`] = getters[r]()
    }
    return obj
}

const rootReducer = combineReducers(reduxReducer())

const persistConfig = {
    key: "root",
    storage: AsyncStorage
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const reduxStore = () => {
    let store = createStore(persistedReducer, applyMiddleware(thunk))
    let persistor = persistStore(store)
    return {store, persistor}
}

