import styled from "styled-components/native"

export const HomeWrapper = styled.ScrollView`   
    background:#181717
`


export const HomeMain = styled.View`
    margin:80px 39px;
    justify-content:center;
    align-items:center;
    gap:40px
`

export const ButtonContainer = styled.TouchableOpacity`
  width: 100%;
  padding: 16px 20px;
  justify-content: start;
  align-items: center;
  gap: 10px;
  border-radius: 10px;
  background: #0D1358;
  flex-direction:row;
`;

export const ButtonText = styled.Text`
    color: #FFF;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    color:white;
 
`;

export const SubText = styled.Text`
    color: #FFF;
    text-align: center;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
`

export const HeaderText = styled.Text`
    text-align: center;
    font-size: 30px;
    font-style: normal;
    font-weight: 700;
    color:#FFF

`
