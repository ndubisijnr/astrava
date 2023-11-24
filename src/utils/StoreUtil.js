import {reduxGetters, reduxAction} from "../store/store";
import {useDispatch} from "react-redux";


export  const StoreUtil = () => {
  const reduxDispatch = useDispatch()

  const dispatch = (actionType, payload) => {
    return reduxAction()[actionType]({getters:rootGetters, dispatch, commit, router:null}, payload);
  }

  const commit = (actionType, payload) => {
    reduxDispatch({type: actionType, payload: payload})
  }

  const initializeGetters = reduxGetters();

  const rootGetters = (getter) => {
    return initializeGetters[getter];
  }

  return  {
    commit: commit,
    rootGetters: rootGetters,
    dispatch: dispatch
  }
}
