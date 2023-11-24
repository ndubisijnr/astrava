import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Router from './src/router';
import styled from "styled-components/native";
import Constants from 'expo-constants'
import { Platform, Dimensions } from "react-native";
import {Provider} from 'react-redux'
import {reduxStore} from "./src/store/store";
import {PersistGate} from "redux-persist/integration/react";


const StatusBarHeight = Constants.statusBarHeight;
const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

export const Container = styled.View`
  flex: 1;
  background-color:#181717;
  height: ${screenHeight + `px`};
  width: ${screenWidth + `px`};
  padding-top: ${Platform.OS === 'android' ? StatusBarHeight + 'px' : null};
`;

export default function App() {
  const {store, persistor} = reduxStore()

  return (
    <Provider store={store}>
       <PersistGate loading={null} persistor={persistor}>
        <StatusBar style="light" />
        <Container>
            <Router />
        </Container>
      </PersistGate>
    </Provider>
    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app!</Text>
    //   <StatusBar style="auto" />
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
