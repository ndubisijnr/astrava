import HeaderNavigator from "../../components/HeaderNavigator"
import { View, Text, TouchableOpacity, FlatList, Image } from "react-native"
import styled from "styled-components"
import { Dimensions } from "react-native";
import { useState } from "react";
import Ell from "../../../assets/Ellipse59.png"
import { LinearGradient } from 'expo-linear-gradient';
import { RouterUtils } from "../../utils/RouterUtils";
import ActionTypeUtil from "../../utils/ActionTypeUtil";





const screenHeight = Dimensions.get('window').height;



const ChatWrapper = styled.View`
    margin:30px 9px;
`

const ChatItem = styled.TouchableOpacity`
    width: 100%;
    height: 85px;
    flex-shrink: 0;
    padding:20px 30px;
    flex-direction:row;
    gap:10px;
`

const Breaker = styled.View`
    width: 343px;
    height: 1px;
    background: rgba(255, 255, 255, 0.10);
`

const Rectangle124 = styled.View`
   
`

const NameText = styled.Text`
    color: #EBEBEB;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
`

const MessageText = styled.Text`
    color: #858585;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
`

const ProfilePics = styled.View`
    width: 45px;
    height: 45px;
    justify-content:center;
    flex-shrink: 0;
    align-items:center;
`

const ProfileImage = styled.Image`
`

const InboxView = () => {

    const [selected, setSelected] = useState(null)

    function ToChatView(index){
        setSelected(index)
        setTimeout(() => {
            RouterUtils.navigate(ActionTypeUtil.routes.chat.ChatView, {})
            setSelected(null)
        },300)
       

    }

    const chat = [
        {
            "profile_pics":Ell,
            "name":"Marcel De’Varl",
            "message":"Time machine"
        },
        {
            "profile_pics":Ell,
            "name":"Selena Gomez",
            "message":"Pray for the world"
        },
        {
            "profile_pics":Ell,
            "name":"Pearl Maryjane",
            "message":"Love is not blind"
        }
    ]

    const ChatComponent = ({item, index}) => {
                return <>
                    <ChatItem style={selected === index ?  {backgroundColor:'#222'}: null} onPress={() => ToChatView(index)}>
                        <LinearGradient colors={['#762C91', '#26569E']} style={{borderRadius:360}}>
                            <ProfilePics>
                                <Image source={item.profile_pics} style={{width:38,height:38}} />
                            </ProfilePics>
                        </LinearGradient>

                        <Rectangle124>
                            <NameText>{item.name}</NameText>
                            <MessageText>{item.message}</MessageText>
                        </Rectangle124>

                    </ChatItem>

                    <Breaker />
                </>
     
    }

    return(
        <>
            <View  style={{backgroundColor:'#181717', height:screenHeight}}>
                <HeaderNavigator></HeaderNavigator>

                <ChatWrapper>

                    <FlatList data={chat} renderItem={ChatComponent}></FlatList>


              
                  

                </ChatWrapper>
            </View>
        </>
    )

}

export default InboxView