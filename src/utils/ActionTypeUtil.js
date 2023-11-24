class ActionTypeUtil {
    static actions = {
        auth:{
        
        },

       
    };

    static mutations = {
        auth:{
            updateLoading:"auth/updateLoading",
            updateUserInfo:"auth/updateUserInfo",
        },
       
       
    };

    static getters = {
        auth:{
            getLoading:"auth/getLoading",
            getUserInfo:"auth/getUserInfo"
        }
        
        
    };

    static routes = {
        auth:{
            HomeView:"HomeView",
        },

        dashboard:{
            DashBoardView:"Home",
            WalletView:"Wallet",
            InboxView:"Inbox",
          
        },

        chat:{
            ChatView:"Chat Inbox"
        },

        settings:{
            SettingsView:"Settings",
            ProfileView:"Profile"
        }
       
    };
}

export default ActionTypeUtil;