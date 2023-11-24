import ActionTypeUtil from "../../utils/ActionTypeUtil"
import SettingsView from "../../views/settings/SettingsView"
import ProfileView from "../../views/settings/ProfileView"

const settingsRoute = [
    {
        name: ActionTypeUtil.routes.settings.SettingsView,
        component: SettingsView,
        options:{title:'Settings', headerShown: false}
    },
    
    {
        name: ActionTypeUtil.routes.settings.ProfileView,
        component: ProfileView,
        options:{title:'Profile', headerShown: false}
    },

]

export default settingsRoute