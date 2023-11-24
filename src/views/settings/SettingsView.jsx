import HeaderNavigator from "../../components/HeaderNavigator"
import { View, Text, Image, TouchableOpacity } from "react-native"
import { Dimensions } from "react-native";
import styled from "styled-components"
import OP from "../../../assets/Optimism.png"
import { RouterUtils } from "../../utils/RouterUtils";
import ActionTypeUtil from "../../utils/ActionTypeUtil";
import AsyncStorage from "@react-native-async-storage/async-storage";



const screenHeight = Dimensions.get('window').height;

const Text_1  = styled.Text`
    color: #FFF;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
`

const AddressText =styled.Text`
    color: rgba(133, 133, 133, 0.68);
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
`

const SettingWrapper = styled.View`
    margin:60px 20px;
`


const UserNameText = styled.Text`
    color: #FFF;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
`


const SettingsView = () => {
    async function logout(){
        await AsyncStorage.removeItem("@user")
        RouterUtils.navigate(ActionTypeUtil.routes.auth.HomeView)
    }
    return(
        <>
          <View style={{backgroundColor:'#181717', height:screenHeight}}>
            <HeaderNavigator></HeaderNavigator>


            <SettingWrapper>

                <View>

                    <TouchableOpacity style={{borderBottomWidth:1, borderBottomColor:'rgba(255, 255, 255, 0.14)', paddingBottom:20, marginBottom:20}}>
                        <Text_1>Airdrop</Text_1>
                    </TouchableOpacity>

                    <TouchableOpacity style={{borderBottomWidth:1, borderBottomColor:'rgba(255, 255, 255, 0.14)', paddingBottom:20, marginBottom:20}}>
                        <Text_1>Refer & Earn</Text_1>
                    </TouchableOpacity>

                    <TouchableOpacity style={{borderBottomWidth:1, borderBottomColor:'rgba(255, 255, 255, 0.14)', paddingBottom:20, marginBottom:20}}>
                        <Text_1>Tickets</Text_1>
                    </TouchableOpacity>

                    <TouchableOpacity style={{borderBottomWidth:1, borderBottomColor:'rgba(255, 255, 255, 0.14)', paddingBottom:20, marginBottom:20}}>
                        <Text_1>Bookmarks</Text_1>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => logout()} style={{borderBottomWidth:1, borderBottomColor:'rgba(255, 255, 255, 0.14)', paddingBottom:20, marginBottom:20}}>
                        <Text_1>Logout</Text_1>
                    </TouchableOpacity>

                </View>

                <View style={{marginTop:30}}>
                    <AddressText>Assets</AddressText>
                    <View style={{flexDirection:'row', justifyContent:'space-between',marginTop:10}}>
                        <View style={{flexDirection:'row', gap:5}}>
                            <Image source={OP} style={{width:20, height:20}}></Image>
                            <UserNameText>ETH</UserNameText>
                        </View>
                        <UserNameText>0.0</UserNameText>
                    </View>
                </View>

            </SettingWrapper>


          </View>
        
        </>
    )
}

export default SettingsView