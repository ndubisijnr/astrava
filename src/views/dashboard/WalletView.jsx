import HeaderNavigator from "../../components/HeaderNavigator"
import { View, Image, TouchableOpacity } from "react-native"
import styled from "styled-components"
import { Dimensions } from "react-native";
import ProfilePic from "../../../assets/Ellipse59.png"
import CopyIcon from "../../../assets/solar_copy-line-duotone.png"
import OP from "../../../assets/Optimism.png"
import { noAction } from "../../components/HeaderNavigator";
import RBSheet from "react-native-raw-bottom-sheet";
import { useRef } from "react";
import { StoreUtil } from "../../utils/StoreUtil"
import ActionTypeUtil from "../../utils/ActionTypeUtil"




const screenHeight = Dimensions.get('window').height;

const WalletWrapper = styled.ScrollView`
    background-color:#181717;
    height: ${screenHeight + `px`};
    padding:30px 20px;
`


const ProfileArea = styled.View`
    border:2px solid #26489E;
    border-radius:360px
    width: 60px;
    height: 60px;
    flex-shrink: 0;
    display:flex;
    align-items:center;
    justify-content:center;
`

const ProfileImageCircle = styled.Image`
    width: 55px;
    height: 55px;
    flex-shrink: 0;
    border-radius:360px
    
`

const UserNameText = styled.Text`
    color: #FFF;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
`

const AddressText = styled.Text`
    color: rgba(133, 133, 133, 0.68);
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
`

const ValuedBox = styled.View`
    display: flex;
    width: auto;
    height:auto
    padding: 10px 30px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    flex-shrink: 0;
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.30);

`

const ButtonContainer = styled.TouchableOpacity`
  width: 100%;
  padding: 16px 20px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 100px;
  background: #26489E;
  flex-direction:row;
`;

const ButtonContainerTransparent = styled.TouchableOpacity`
  width: 100%;
  padding: 16px 20px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 100px;
  border: 1px solid #26489E;
  background: transparent;
  flex-direction:row;
`;

export const ButtonText = styled.Text`
    color: #FFF;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    color:white;
 
`;

const SheetViewWrapper = styled.View`
    margin:29px 35px;
`

const Input = styled.TextInput`
    width: 100%;
    height: 42px;
    border-radius: 26px;
    border: 1px solid rgba(101, 101, 101, 0.26);    

`

const Lable = styled.Text`
    width: 82px;
    height: 16px;
    color: #D9D9D9;
    font-size:12px
`

const WalletBalance = styled.Text`
    color: #26489E;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    margin-bottom:30px;
`


const WalletView = () => {
    const refRBSheet_deposite = useRef();
    const refRBSheet_widthdraw = useRef();
    const refRBSheet_keys = useRef();

    const storeUtil = StoreUtil()

    const userInfo = storeUtil.rootGetters(ActionTypeUtil.getters.auth.getUserInfo)


    const DepositeSheet = () => {
        return <>
            <RBSheet
                ref={refRBSheet_deposite}
                closeOnDragDown={true}
                closeOnPressMask={true}
                customStyles={{
                    wrapper: {
                        backgroundColor: "rgba(23, 23, 23, 0.79);"
                    },
                    // draggableIcon: {
                    //     backgroundColor: "#E4E4E4",
                    //     width:91,
                    //     marginTop:34
                    // },
                    container: {
                        borderTopRightRadius: 18,
                        borderTopLeftRadius: 18,
                        borderBottomLeftRadius: 0,
                        borderBottomRightRadius: 0,
                        backgroundColor: 'rgba(13, 13, 13, 0.95)',
                        height: 497
                    }
                }}>


                <SheetViewWrapper>

                    <View style={{ gap: 15, alignItems: "center" }}>
                        <View>
                            <UserNameText>Fund Your Wallet</UserNameText>
                        </View>

                        {/* select options */}
                        <View></View>


                        <View style={{ width: 252 }}>
                            <AddressText style={{ textAlign: 'center' }}>Transfer OPTIMISM to the address below to deposit OPTIMISM to  your wallet</AddressText>
                        </View>
                    </View>


                    {/* qrcode display */}

                    <View style={{ marginTop: 28 }}></View>


                    <View style={{ marginTop: 25, alignItems: 'center' }}>
                        <TouchableOpacity onPress={() => noAction()} style={{ width: '100%', padding: 12, flexDirection: 'row', gap: 5, alignItems: 'center', justifyContent: 'center', borderRadius: 26, borderWidth: 1, borderColor: 'rgba(101, 101, 101, 0.26)' }}>
                            <AddressText>0xfmosk90MKHHFhhshmnCe..</AddressText>
                            <Image source={CopyIcon} style={{ width: 20, height: 20 }}></Image>
                        </TouchableOpacity>
                    </View>


                </SheetViewWrapper>
            </RBSheet>
        </>

    }

    const WithdrawSheet = () => {
        return <>
            <RBSheet
                ref={refRBSheet_widthdraw}
                closeOnDragDown={true}
                closeOnPressMask={true}
                customStyles={{
                    wrapper: {
                        backgroundColor: "rgba(23, 23, 23, 0.79);"
                    },
                    // draggableIcon: {
                    //     backgroundColor: "#E4E4E4",
                    //     width:91,
                    //     marginTop:34
                    // },
                    container: {
                        borderTopRightRadius: 18,
                        borderTopLeftRadius: 18,
                        borderBottomLeftRadius: 0,
                        borderBottomRightRadius: 0,
                        backgroundColor: 'rgba(13, 13, 13, 0.95)',
                        height: 497
                    }
                }}>


                <SheetViewWrapper>

                    <View style={{ gap: 15, alignItems: "center" }}>
                        <View>
                            <UserNameText>Withdraw from wallet</UserNameText>
                        </View>

                        {/* select options */}
                        <View></View>


                        <View style={{ width: 222 }}>
                            <AddressText style={{ textAlign: 'center' }}>A gas fee will be deducted for this transfer to cover network processing costs</AddressText>
                        </View>
                    </View>


                    {/* qrcode display */}

                    <View style={{ marginTop: 28 }}>
                        <View>
                            <Lable>Wallet Address</Lable>
                            <Input />
                        </View>

                        <View style={{marginTop:20}}>
                            <Lable>Wallet Address</Lable>
                            <Input />
                        </View>

                        <WalletBalance>Your balance: 0.005 ETH</WalletBalance>
                    </View>


                    <ButtonContainer onPress={() => refRBSheet_widthdraw.current.open()}>
                            <ButtonText>Widthdraw</ButtonText>
                        </ButtonContainer>


                    


                </SheetViewWrapper>
            </RBSheet>
        </>

    }


    const KeysSheet = () => {
        return <>
            <RBSheet
                ref={refRBSheet_keys}
                closeOnDragDown={true}
                closeOnPressMask={true}
                customStyles={{
                    wrapper: {
                        backgroundColor: "rgba(23, 23, 23, 0.79);"
                    },
                    // draggableIcon: {
                    //     backgroundColor: "#E4E4E4",
                    //     width:91,
                    //     marginTop:34
                    // },
                    container: {
                        borderTopRightRadius: 18,
                        borderTopLeftRadius: 18,
                        borderBottomLeftRadius: 0,
                        borderBottomRightRadius: 0,
                        backgroundColor: 'rgba(13, 13, 13, 0.95)',
                        height: 497
                    }
                }}>


                <SheetViewWrapper>

                    <View style={{ gap: 15, alignItems: "center" }}>
                        <View>
                            <UserNameText>Export Private Keys</UserNameText>
                        </View>

                        {/* select options */}
                        <View></View>


                        <View style={{ width: 230 }}>
                            <AddressText style={{ textAlign: 'center' }}>Export your private keys to use on other wallets</AddressText>
                        </View>
                    </View>


                    {/* qrcode display */}

                    <View style={{ marginTop: 28 }}></View>


                    <View style={{ marginTop: 25, alignItems: 'center' }}>
                        <AddressText style={{marginBottom:10}}>Your private keys</AddressText>
                        <TouchableOpacity onPress={() => noAction()} style={{ width: '100%', padding: 12, flexDirection: 'row', gap: 5, alignItems: 'center', justifyContent: 'center', borderRadius: 26, borderWidth: 1, borderColor: 'rgba(101, 101, 101, 0.26)' }}>
                            <AddressText>0xfmosk90MKHHFhhshmnCe..</AddressText>
                            <Image source={CopyIcon} style={{ width: 20, height: 20 }}></Image>
                        </TouchableOpacity>
                    </View>


                </SheetViewWrapper>
            </RBSheet>
        </>

    }


    return (
        <>
            <View>
                <HeaderNavigator></HeaderNavigator>

                <WalletWrapper>
                    <View style={{ flexDirection: 'row', gap: 11, alignItems: 'center' }}>
                        <ProfileArea>
                            <ProfileImageCircle source={{uri:userInfo?.picture}} resizeMode="cover"></ProfileImageCircle>
                        </ProfileArea>
                        <View>
                            <UserNameText>@{userInfo?.name.replace(' ', '_')}</UserNameText>
                            <TouchableOpacity onPress={() => noAction()} style={{ flexDirection: 'row', gap: 5, alignItems: 'center' }}>
                                <AddressText>0x817...67bA</AddressText>
                                <Image source={CopyIcon} style={{ width: 20, height: 20 }}></Image>
                            </TouchableOpacity>
                        </View>
                    </View>


                    <View style={{ flexDirection: 'row', gap: 20, alignItems: 'center', justifyContent: 'center', marginBottom: 40, marginTop: 40 }}>
                        <ValuedBox>
                            <View style={{ flexDirection: 'row', gap: 7, alignItems: 'center', justifyContent: 'center' }}>
                                <Image source={OP} style={{ width: 20, height: 20 }}></Image>
                                <UserNameText>0.0 ETH</UserNameText>
                            </View>
                            <AddressText>Fees Earned</AddressText>
                        </ValuedBox>
                        <ValuedBox>
                            <View style={{ flexDirection: 'row', gap: 7, alignItems: 'center', justifyContent: 'center' }}>
                                <Image source={OP} style={{ width: 20, height: 20 }}></Image>
                                <UserNameText>0.0 ETH</UserNameText>
                            </View>
                            <AddressText>Portfolio Value</AddressText>
                        </ValuedBox>
                    </View>


                    <View style={{ gap: 15 }}>
                        <ButtonContainer onPress={() => refRBSheet_deposite.current.open()}>
                            <ButtonText>Deposit</ButtonText>
                        </ButtonContainer>

                        <ButtonContainer onPress={() => refRBSheet_widthdraw.current.open()}>
                            <ButtonText>Widthdraw</ButtonText>
                        </ButtonContainer>

                        <ButtonContainerTransparent onPress={() => refRBSheet_keys.current.open()}>
                            <ButtonText>Export Private Keys</ButtonText>
                        </ButtonContainerTransparent>
                    </View>



                </WalletWrapper>
            </View>

            <DepositeSheet />
            <WithdrawSheet />
            <KeysSheet />
        </>
    )

}

export default WalletView