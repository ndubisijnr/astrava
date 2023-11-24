import HomeView from "../../views/auth/HomeView"
import ActionTypeUtil from "../../utils/ActionTypeUtil"

const authRoute = [
    {
        name: ActionTypeUtil.routes.auth.HomeView,
        component: HomeView,
        options:{title:'HomeView', headerShown: false}
    },

]

export default authRoute