import ActionTypeUtil from "../../utils/ActionTypeUtil"
import {useSelector} from "react-redux";


const initialState = {
    loading:false,
    userInfo:null
}

const getters = {
    getLoading: () => useSelector((state) => state["auth/reducer"]).loading,
    getUserInfo: () => useSelector((state) => state["auth/reducer"]).userInfo

}

const mutations = {
    reducer: (state = initialState, {type, payload}) => {
        switch (type) {
            case ActionTypeUtil.mutations.auth.updateLoading:
                return {...state, loading: payload}
            case ActionTypeUtil.mutations.auth.updateUserInfo:
                return {...state, userInfo: payload}
            default:
                return state
        }
    }
}

const actions = {

}

export const auth = {
    state: initialState,
    getters: getters,
    mutations: mutations,
    actions: actions
}
