import ActionTypeUtil from "../../utils/ActionTypeUtil"
import ChatView from "../../views/chat/ChatView"

const chatRoute = [
    {
        name: ActionTypeUtil.routes.chat.ChatView,
        component: ChatView,
        options:{title:'Chat Inbox', headerShown: false}
    },


]

export default chatRoute