import { View, Text, Image, TouchableOpacity, ToastAndroid, StyleSheet } from "react-native"
import WhiteLogo from "../../assets/small_logo_white.png"
import HamBurgerMenu from "../../assets/charm_menu-hamburger.png"
import styled from "styled-components"
import { useNavigationState } from '@react-navigation/native';
import Search from "../../assets/ri_search-fill.png"
import Notification from "../../assets/mingcute_notification-line.png"
import { RouterUtils } from "../utils/RouterUtils";
import ActionTypeUtil from "../utils/ActionTypeUtil";
import { StoreUtil } from "../utils/StoreUtil";

const HeaderWrapper = styled.View`
    background-color:#1D1D1D;
    flex-direction:row;
    justify-content:space-between;
    padding:10px 12px;
    align-items:center;
`
const ProfileCircle = styled.TouchableOpacity`
    width: 24px;
    height: 24px;
    border-radius: 19.55px;
    border:solid #FFF 1px;
`

export function noAction() {
    ToastAndroid.show('No action to perform :)', ToastAndroid.SHORT)
}

const HeaderNavigator = () => {
    const storeUtil = StoreUtil()

    const navigationState = useNavigationState(state => state);

    const userInfo = storeUtil.rootGetters(ActionTypeUtil.getters.auth.getUserInfo)


    const currentRoute = navigationState.routes[navigationState.index];


    const MenuIcons = () => {
        if(currentRoute.name === 'HomeView')
            return <>
                <TouchableOpacity onPress={noAction}>
                    <Image source={HamBurgerMenu} style={{width: 34,height: 34}} />
                </TouchableOpacity>
            </>
        else
            return <>
                <View style={{flexDirection:'row',gap:20,alignItems:'center',justifyContent:'center'}}>
                    <TouchableOpacity>
                        <Image source={Notification} style={{width: 24,height: 24}} /> 
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={Search} style={{width: 24,height: 24}} /> 
                    </TouchableOpacity>
                    <ProfileCircle onPress={() => RouterUtils.navigate(ActionTypeUtil.routes.settings.ProfileView)}>
                        <Image source={{uri:userInfo?.picture}} style={{width: 22,height: 22,borderRadius:360}} />
                    </ProfileCircle>
                </View>
            
            </>
        
    }

    return(
        <>
            <HeaderWrapper style={{}}>
                <TouchableOpacity onPress={() => RouterUtils.navigate(ActionTypeUtil.routes.settings.SettingsView)}>
                    <Image source={WhiteLogo} style={{width: 23,height: 28}}></Image>
                </TouchableOpacity>

                <MenuIcons />
            </HeaderWrapper>

        </>
    )
}

export default HeaderNavigator

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});