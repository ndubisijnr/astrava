import HeaderNavigator from "../../components/HeaderNavigator"
import { KeyboardAvoidingView,Text, View,Platform, Image, TouchableOpacity} from "react-native";

import { Dimensions } from "react-native";
import { useState } from "react";
import { LinearGradient } from 'expo-linear-gradient';
import styled from "styled-components";
import Smilies from "../../../assets/mdi_emoji-outline.png"
import Documents from "../../../assets/tdesign_attach.png"
import Media from "../../../assets/material-symbols_image-outline.png"
import Ell from "../../../assets/Ellipse59.png"
import Send from "../../../assets/send.png"




const screenHeight = Dimensions.get('window').height;

const ChatSessionArea = styled.ScrollView`
        margin-top:30px;
`


const SmilyIconArea = styled.TouchableOpacity``

const MediaArea = styled.TouchableOpacity``

const IncomingChatBox = styled.View`
        display: flex;
        padding: 10px 20px;
        justify-content: center;
        align-items: center;
        gap: 10px;
        background: #242424;
       
`

const OutgoingText = styled.Text`
        color: #858585;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
`

const IncomingText = styled.Text`
        color: #FFF;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
`

const OutgoingChatBox = styled.View`
        display: flex;
        padding: 10px 20px;
        gap: 10px;
        background: #26489E;
        border-top-left-radius: 10px;
        border-top-right-radius: 360px;
        border-bottom-right-radius: 360px;
        background: #242424;
        width:80%;
`

const ChatInput = styled.TextInput`
        width: 100%;
        height: 47px;
        border: 1px solid #414141;
        background: #232323;
        padding-left:79px;
        color:#FFF;
        border-radius: 35.5px;

       
`

const ChatInputWrapper = styled.KeyboardAvoidingView`
        position:absolute;
        bottom:42px;
        width:100%
        padding:0 15px;
        align-item:center;
        justify-content:center;
`

const ProfilePics = styled.View`
    width: 45px;
    height: 45px;
    justify-content:center;
    flex-shrink: 0;
    align-items:center;
`

const TimeStampText = styled.Text`
        color: rgba(133, 133, 133, 0.34);
        font-size: 10px;
        font-style: normal;
        font-weight: 400;
        margin-top:5px;
`





const ChatView = () => {
    return <>
            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{backgroundColor:'#181717', height:screenHeight,position:'relative'}}>
                    <HeaderNavigator></HeaderNavigator>

                    <View style={{position:'relative',padding:10}}>
                        <ChatSessionArea>
                              
                                <View style={{flexDirection:'row',gap:10}}>
                                        <LinearGradient colors={['#762C91', '#26569E']} style={{borderRadius:360,height:45}}>
                                                <ProfilePics>
                                                        <Image source={Ell} style={{width:38,height:38}} />
                                                </ProfilePics>
                                        </LinearGradient>

                                        <View>
                                                <View style={{marginBottom:10}}>
                                                        <OutgoingChatBox>
                                                                <OutgoingText>Eyoo, how are you doing?</OutgoingText>
                                                        </OutgoingChatBox>
                                                        <TimeStampText>10/11/21 - 5:50PM</TimeStampText>
                                                </View>
                                                <View style={{marginBottom:10}}>
                                                        <OutgoingChatBox>
                                                                <OutgoingText>What have you been up to, we haven’t seen you in a while.</OutgoingText>
                                                        </OutgoingChatBox>
                                                        <TimeStampText>10/11/21 - 5:50PM</TimeStampText>
                                                </View>

                                        </View>
                                        
                                        
                                </View>


                        </ChatSessionArea>

                    
                    </View>
                    <ChatInputWrapper>
                        <View style={{flexDirection:'row',position:'absolute', left:24,zIndex:9,gap:10}}>
                                <TouchableOpacity>
                                        <Image source={Smilies} style={{width:24,height:24}}></Image>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                        <Image source={Documents} style={{width:24,height:24}}></Image>
                                </TouchableOpacity>
                        </View>
                        <ChatInput placeholder={'Start a message'}></ChatInput>
                        <View style={{flexDirection:'row',position:'absolute',right:24,zIndex:99}}>
                              
                                <TouchableOpacity>
                                 <Image source={Send} style={{width:24,height:24}}></Image>
                                </TouchableOpacity>
                        </View>
                    </ChatInputWrapper>
            </KeyboardAvoidingView>
    </>
}

export default ChatView

