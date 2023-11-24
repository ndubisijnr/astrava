import HeaderNavigator from "../../components/HeaderNavigator"
import { View, ImageBackground, TouchableOpacity, Image, Text, ScrollView, StyleSheet } from "react-native"
import styled from "styled-components"
import CoverImage from "../../../assets/Rectangle115.png"
import ProfilePic from "../../../assets/Ellipse59.png"
import DollarIcon from "../../../assets/mdi_dollar.png"
import Comment from "../../../assets/ant-design_comment-outlined.png"
import AddonImagePics from "../../../assets/Rectangle35.png"
import Heart from "../../../assets/icon-park-outline_like.png"
import Share from "../../../assets/ic_baseline-share.png"
import Anlytics from "../../../assets/majesticons_analytics-line.png"
import { useEffect, useState } from "react"
import { Dimensions } from "react-native";
import { StoreUtil } from "../../utils/StoreUtil"
import ActionTypeUtil from "../../utils/ActionTypeUtil"
import AsyncStorage from "@react-native-async-storage/async-storage"



const screenHeight = Dimensions.get('window').height;

const CoverImageWrapper = styled.Image`
    height:170px;
    width:100%
`

const ProfileArea = styled.View`
    border:2px solid #26489E;
    border-radius:360px;
    width: 83px;
    height: 83px;
    flex-shrink: 0;
    margin-top:-25px;
    display:flex;
    align-items:center;
    justify-content:center;
`

const ProfileImageCircle = styled.Image`
    width: 75px;
    height: 75px;
    flex-shrink: 0;
    border-radius:360px;
    
`

const UserNameText = styled.Text`
    color: #FFF;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
`

const AddressText =styled.Text`
    color: rgba(133, 133, 133, 0.68);
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
`

const UserNameTextWhite = styled.Text`
    color: #FFF;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
`

const TextArea = styled.Text`
    color: #FFF;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    width: 237px;
`

const ButtonContainerTransparent = styled.TouchableOpacity`
  width: 105px;
  padding: 8px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 100px;
  border: 1px solid #26489E;
  background: transparent;
  flex-direction:row;
`;

export const ButtonText = styled.Text`
    color: #26489E;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
 `

 const DashBoardViewWrapper = styled.View`
 margin:0 22.75px;
 `

 const TicketBoxLayout = styled.TouchableOpacity`
    width: 100%;
    padding: 10px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.30);
    margin:20px 0 10px 0;
`

const AddonImage = styled.ImageBackground`
    width: 100%;
    border-radius: 11px;
    height: 200px;
    margin:20px 0;
`

const ProfileView = () => {
    const storeUtil = StoreUtil()

    const userInfo = storeUtil.rootGetters(ActionTypeUtil.getters.auth.getUserInfo)

    const [tab, setTab] = useState('tickets')

    useEffect(() => {
        console.log(AsyncStorage.getItem("@user"))
       
    }, [])


    return (
            <View style={{backgroundColor:'#181717', height:screenHeight}}>
                <HeaderNavigator></HeaderNavigator>
                <ScrollView>
                <CoverImageWrapper source={{uri:userInfo?.picture}} resizeMode="cover"></CoverImageWrapper>

              

                <DashBoardViewWrapper>
                  

                    <View style={{flexDirection:'row', gap:11, alignItems:'center',justifyContent:'space-between'}}>
                        <ProfileArea>
                            <ProfileImageCircle source={{uri:userInfo?.picture}} resizeMode="contain"></ProfileImageCircle>
                        </ProfileArea>

                        <View style={{flexDirection:"row",alignItems:'center',gap:15}}>
                            <TouchableOpacity>
                                <Image source={DollarIcon} style={{width: 24,height: 24}} /> 
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Image source={Comment} style={{width: 24,height: 24}} /> 
                            </TouchableOpacity>

                            <ButtonContainerTransparent>
                                <ButtonText>Unfollow</ButtonText>
                            </ButtonContainerTransparent>
                        </View>
                        
                    </View>


                    <View style={{flexDirection:'row', gap:5, alignItems:'center',justifyContent:'space-between',marginTop:17, marginBottom:30}}>

                        <View>
                            <UserNameText>{userInfo?.name}</UserNameText>
                            <TouchableOpacity style={{flexDirection:'row', gap:5, alignItems:'center'}}>
                                <AddressText>@{userInfo?.name.replace(' ', '_')}</AddressText>
                            </TouchableOpacity>
                        </View>

                        <View style={{flexDirection:'row', gap:10, alignItems:'center'}}>
                            <View>
                                <UserNameText style={{color:'#26489E'}}>0.078 ETH</UserNameText>
                                <AddressText>Ticket Price</AddressText>
                            </View>
                            <ButtonContainerTransparent style={{width:69,backgroundColor:'#26489E'}}>
                                <ButtonText style={{color:'#FFF'}}>Buy</ButtonText>
                            </ButtonContainerTransparent>

                        </View>
                    </View>


                    <View style={{flexDirection:'row', gap:101, alignItems:'center'}}>
                        <TouchableOpacity>
                            <UserNameText>305</UserNameText>
                            <AddressText>Followers</AddressText>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <UserNameText>10</UserNameText>
                            <AddressText>Following</AddressText>
                        </TouchableOpacity>
                    </View>

                </DashBoardViewWrapper>
                  

             
                <View style={{marginTop:30}}>
                    <DashBoardViewWrapper>

                        <View style={{flexDirection:'row', gap:36.5, alignItems:'center'}}>
                            {
                                    tab === 'threads'  ?  <TouchableOpacity style={{paddingBottom:10}}>
                                                            <UserNameText>Threads</UserNameText>
                                                        </TouchableOpacity> 
                                                    :
                                                        <TouchableOpacity onPress={() => setTab('threads')}  style={{paddingBottom:10}}>
                                                            <AddressText>Threads</AddressText>
                                                        </TouchableOpacity>
                            }

                            {
                                tab === 'tickets'  ?   <TouchableOpacity style={{paddingBottom:10}}>
                                                            <UserNameText>Tickets</UserNameText> 
                                                        </TouchableOpacity>
                                                        : 
                                                        <TouchableOpacity onPress={() => setTab('tickets')}  style={{paddingBottom:10}}>
                                                            <AddressText>Tickets</AddressText>
                                                        </TouchableOpacity>
                            }
                        
                        </View>
                    </DashBoardViewWrapper>
                    <View style={{borderWidth:1, borderColor:'rgba(255, 255, 255, 0.32)'}}></View>

                    {tab === 'threads' ?

                    <DashBoardViewWrapper>
                        <View>
                            <View style={{paddingTop:20,borderBottomWidth:1, borderBottomColor:'rgba(234, 234, 234, 0.10)',flexDirection:'row', gap:14, alignItems:'start',paddingBottom:30}}>
                                <ProfileArea style={{width:56, height:56, marginTop:0}}>
                                    <ProfileImageCircle source={ProfilePic} resizeMode="contain" style={{width:56, height:56}}></ProfileImageCircle>
                                </ProfileArea>
                                <View>
                                    {/* username */}
                                    <View style={{flexDirection:'row', gap:6, alignItems:'center'}}>
                                        <UserNameText>David Bowen</UserNameText>
                                        <UserNameTextWhite>@DaveBow</UserNameTextWhite>
                                    </View>
                                    {/* end username */}

                                    <View style={{width:'100%'}}>
                                        <TextArea style={{marginTop:10}}>Life only favors those who deserve it, but this imagination is wild.</TextArea>

                                        <TextArea style={{marginTop:18}}>#family #bonding #thanksgiving</TextArea>
                                    </View>


                                    {/* photo */}
                                        <View></View>
                                    {/* photo */}



                                   {/* actions */}
                                   <View style={{flexDirection:'row', gap:48, alignItems:'center', marginTop:15}}>
                                            <View style={{flexDirection:'row', gap:22, alignItems:'center'}}>
                                                {/* heart */}
                                                <View>
                                                    <TouchableOpacity>
                                                        <Image source={Heart} style={{width: 20,height: 20}} /> 
                                                      
                                                    </TouchableOpacity>
                                                    <UserNameTextWhite>3.2k</UserNameTextWhite>
                                                </View>

                                                {/* comment */}
                                                <View>
                                                    <TouchableOpacity>
                                                        <Image source={Comment} style={{width: 20,height: 20}} /> 
                                                    </TouchableOpacity>
                                                    <UserNameTextWhite>500</UserNameTextWhite>

                                                </View>

                                                {/* share */}
                                                <View>
                                                    <TouchableOpacity>
                                                        <Image source={Share} style={{width: 20,height: 20}} /> 
                                                    </TouchableOpacity>
                                                    <UserNameTextWhite>285</UserNameTextWhite>

                                                </View>

                                                {/* insight */}
                                                <View>
                                                    <TouchableOpacity>
                                                        <Image source={Anlytics} style={{width: 20,height: 20}} /> 
                                                    </TouchableOpacity>
                                                    <UserNameTextWhite>500</UserNameTextWhite>

                                                </View>

                                            </View>
                                            <View>
                                                {/* money */}
                                                <View>
                                                    <TouchableOpacity>
                                                        <Image source={DollarIcon} style={{width: 20,height: 20}} /> 
                                                    </TouchableOpacity>
                                                    <UserNameTextWhite>$0.5</UserNameTextWhite>

                                                </View>
                                            </View>
                                        </View>
                                    {/* end actions */}
                                </View>
                            </View>
                            <View style={{paddingTop:20,flexDirection:'row', gap:14, alignItems:'start',paddingBottom:30}}>
                                <ProfileArea style={{width:56, height:56, marginTop:0}}>
                                    <ProfileImageCircle source={ProfilePic} resizeMode="contain" style={{width:56, height:56}}></ProfileImageCircle>
                                </ProfileArea>
                                <View>
                                    {/* username */}
                                    <View style={{flexDirection:'row', gap:6, alignItems:'center'}}>
                                        <UserNameText>David Bowen</UserNameText>
                                        <UserNameTextWhite>@DaveBow</UserNameTextWhite>
                                    </View>
                                    {/* end username */}

                                    <View style={{width:'100%'}}>
                                        <TextArea style={{marginTop:10}}>Life only favors those who deserve it, but this imagination is wild.</TextArea>

                                        <TextArea style={{marginTop:18}}>#family #bonding #thanksgiving</TextArea>
                                    </View>


                                    {/* photo */}
                                        <AddonImage source={AddonImagePics} style={[styles.image, {resizeMode:'contain'}]}/>
                                    {/* photo */}



                                    {/* actions */}
                                        <View style={{flexDirection:'row', gap:48, alignItems:'center', marginTop:15}}>
                                            <View style={{flexDirection:'row', gap:22, alignItems:'center'}}>
                                                {/* heart */}
                                                <View>
                                                    <TouchableOpacity>
                                                        <Image source={Heart} style={{width: 20,height: 20}} /> 
                                                      
                                                    </TouchableOpacity>
                                                    <UserNameTextWhite>3.2k</UserNameTextWhite>
                                                </View>

                                                {/* comment */}
                                                <View>
                                                    <TouchableOpacity>
                                                        <Image source={Comment} style={{width: 20,height: 20}} /> 
                                                    </TouchableOpacity>
                                                    <UserNameTextWhite>500</UserNameTextWhite>

                                                </View>

                                                {/* share */}
                                                <View>
                                                    <TouchableOpacity>
                                                        <Image source={Share} style={{width: 20,height: 20}} /> 
                                                    </TouchableOpacity>
                                                    <UserNameTextWhite>285</UserNameTextWhite>

                                                </View>

                                                {/* insight */}
                                                <View>
                                                    <TouchableOpacity>
                                                        <Image source={Anlytics} style={{width: 20,height: 20}} /> 
                                                    </TouchableOpacity>
                                                    <UserNameTextWhite>500</UserNameTextWhite>

                                                </View>

                                            </View>
                                            <View>
                                                {/* money */}
                                                <View>
                                                    <TouchableOpacity>
                                                        <Image source={DollarIcon} style={{width: 20,height: 20}} /> 
                                                    </TouchableOpacity>
                                                    <UserNameTextWhite>$0.5</UserNameTextWhite>

                                                </View>
                                            </View>
                                        </View>
                                    {/* end actions */}
                                </View>
                            </View>
                        </View>
                    </DashBoardViewWrapper>
                    :
                    <DashBoardViewWrapper>
                        <ScrollView>
                            <TicketBoxLayout>
                                <View style={{flexDirection:'row'}}>
                                    <UserNameText style={{color:'#0EA20B'}}>+0</UserNameText>
                                    <UserNameText>/</UserNameText>
                                    <UserNameText style={{color:'#C80B0B'}}>-0</UserNameText>
                                </View>
                                <AddressText>Buys/Sells</AddressText>
                            </TicketBoxLayout>
                            <TicketBoxLayout>
                                <UserNameText>0</UserNameText>
                                <AddressText>You Hold</AddressText>
                            </TicketBoxLayout>
                            <TicketBoxLayout>
                                 <UserNameText>0</UserNameText>
                                <AddressText>Holdings</AddressText>
                            </TicketBoxLayout>
                            <TicketBoxLayout>
                                <UserNameText>0</UserNameText>
                                <AddressText>Holders</AddressText>
                            </TicketBoxLayout>
                        </ScrollView>
                    </DashBoardViewWrapper>

                }
                </View>
                   
                </ScrollView>
            </View>
    )


}

export default ProfileView

const styles = StyleSheet.create({
    image: {
        flex:0.8,
    },
    
  });;
