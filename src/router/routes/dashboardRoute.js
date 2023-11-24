import ActionTypeUtil from "../../utils/ActionTypeUtil"
import DashBoardView from "../../views/dashboard/DashboardView"
import WalletView from "../../views/dashboard/WalletView"
import InboxView from "../../views/dashboard/InboxView"

const dashboardRoute = [
    {
        name: ActionTypeUtil.routes.dashboard.DashBoardView,
        component: DashBoardView,
        options:{title:'DashBoard', headerShown: false}
    },

    {
        name: ActionTypeUtil.routes.dashboard.WalletView,
        component: WalletView,
        options:{title:'Wallet', headerShown: false}
    },

    {
        name: ActionTypeUtil.routes.dashboard.InboxView,
        component: InboxView,
        options:{title:'Inbox', headerShown: false}
    },
   
]

export default dashboardRoute