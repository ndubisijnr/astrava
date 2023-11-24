import { useEffect, useState, useRef } from "react";
import { View, Text, Image, Button, ToastAndroid } from "react-native";
import { HomeWrapper, HomeMain, ButtonContainer, ButtonText, SubText, HeaderText } from "./HomeViewStyles";
import HeaderNavigator from "../../components/HeaderNavigator";
import LandingLogo from "../../../assets/landing_logo_large.png"
import WhiteLogo from "../../../assets/small_logo_white.png"
// import { RouterUtils } from "../../utils/RouterUtils";
// import ActionTypeUtil from "../../utils/ActionTypeUtil";
// import AsyncStorage from "@react-native-async-storage/async-storage";
import { StoreUtil } from "../../utils/StoreUtil";


//android_key 1004979944703-t9o9kkgjdaq0j3kkes73ohcq8nlnmpno.apps.googleusercontent.com


const HomeView = () => {
    const storeUtil = StoreUtil()


    // async function handleSignInWithGoogle(){
    //     const user = await AsyncStorage.getItem("@user")
    //     if(!user){
    //         if(response?.type === "success"){
    //             await getUserInfo(response.authentication.accessToken)
    //         }
    //
    //     }else{
    //         storeUtil.commit(ActionTypeUtil.mutations.auth.updateUserInfo, JSON.parse(user))
    //         RouterUtils.navigate(ActionTypeUtil.routes.dashboard.DashBoardView)
    //     }
    // }

    // const getUserInfo = async (token) => {
    //     if(!token)return;
    //     try{
    //         const response = await fetch("https://www.googleapis.com/userinfo/v2/me",
    //             {
    //                 headers:{Authorization: `Bearer ${token}`},
    //             }
    //         );
    //
    //         const user = await response.json()
    //         await AsyncStorage.setItem("@user",JSON.stringify(user))
    //         ToastAndroid.show('Successful', ToastAndroid.LONG)
    //         storeUtil.commit(ActionTypeUtil.mutations.auth.updateUserInfo, user)
    //         RouterUtils.navigate(ActionTypeUtil.routes.dashboard.DashBoardView)
    //     }catch(e){
    //         ToastAndroid.show(e, ToastAndroid.LONG)
    //     }
    // }

    // async function navigateToDashboard(){
    //     let result = await WebBrowser.openBrowserAsync('https://expo.dev');
    //     setResult(result);
    //     // RouterUtils.navigate(ActionTypeUtil.routes.dashboard.DashBoardView)
    // }

    useEffect(() => {
    }, [])

    return(
        <>

            <HomeWrapper>
               <HeaderNavigator></HeaderNavigator>

               <HomeMain>
                  
                  <View>
                    <Image source={LandingLogo}  style={{width: 115.999,height: 140.882}}/>
                  </View>

                  <View>

                    {/* <HeaderText>{JSON.stringify(userInfo, null, 2)}</HeaderText> */}

                    <View style={{marginBottom:10}}>
                        <View style={{flexDirection:'row', justifyContent:'center'}}>
                            <HeaderText style={{color:'#26489E'}}>Astra </HeaderText>
                            <HeaderText>- The</HeaderText>
                        </View>
                     
                        <HeaderText> Content Creator’s Economy</HeaderText>
                    </View>

                    <View>
                        <SubText>Join the revolution as a content creator, Join Astra Today</SubText>
                    </View>

                  </View>


                  <View>
                    <ButtonContainer>
                        <Image source={WhiteLogo} style={{width: 17,height: 20}}></Image>
                        <ButtonText>Login with Astrava</ButtonText>
                    </ButtonContainer>

                  </View>

               </HomeMain>
            </HomeWrapper>
        
        </>
    )
}

export default HomeView