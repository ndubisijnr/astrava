import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createNavigationContainerRef } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { createDrawerNavigator } from '@react-navigation/drawer';
import authRoute from './routes/homeRoute';
import dashboardRoute from './routes/dashboardRoute';
import { useEffect } from 'react';
import WalletView from '../views/dashboard/WalletView';
import DashBoardView from '../views/dashboard/DashboardView';
import InboxView from '../views/dashboard/InboxView';
import ActionTypeUtil from '../utils/ActionTypeUtil';
import HomeIconActive from '../../assets/ri_home-5-line_active.png'
import WalletIconActive from '../../assets/basil_wallet-outline_active.png'
import HomeIconUnActive from '../../assets/ri_home-5-line_unactive.png'
import WalletIconUnActive from '../../assets/basil_wallet-outline.png'
import ActiveInbox from '../../assets/active_jam_messages.png'
import InboxIcon from '../../assets/jam_messages.png'
import { Image } from 'react-native';
import settingsRoute from './routes/settingsRoute';
import chatRoute from './routes/ChatView';



export const navigationRef = createNavigationContainerRef()



const baseRoutes = [];

const baseBottomRoutes = []

const routes = baseRoutes.concat(authRoute,settingsRoute,chatRoute);




const defaultOption = { headerShown: false }


const Stack = createNativeStackNavigator(); // create stack navigations

const Tab = createBottomTabNavigator();

// const Drawer = createDrawerNavigator();


function BottomTab(){

    return(
         
        <Tab.Navigator  screenOptions={({route}) => ({
            tabBarActiveTintColor: '#26489E', // Set the active tab color
            tabBarInactiveTintColor: '#FFF', // Set the inactive tab color
            
            headerShown:false,
           
            tabBarStyle: {
                backgroundColor: '#1D1D1D', // Set the background color                
                paddingTop:11.5,
                paddingBottom:11.5,
                borderTopWidth: 0, // Remove the top border
                elevation: 0, // Remove shadow on Android
                shadowOpacity: 0, // Remove shadow on iOS
              },
              
              
        })}>
           

            <Tab.Screen name={ActionTypeUtil.routes.dashboard.DashBoardView} component={DashBoardView}
            options={{
                tabBarLabel: ActionTypeUtil.routes.dashboard.DashBoardView,
                tabBarIcon: ({focused }) => (
                    focused ?  <Image source={HomeIconActive} style={{width:24, height:24, marginBottom:3.5}}/>

                            :
                         <Image source={HomeIconUnActive} style={{width:24, height:24, marginBottom:3.5}}/>
                ),
              }}
            />

            <Tab.Screen name={ActionTypeUtil.routes.dashboard.InboxView} component={InboxView}
            options={{
                tabBarLabel: ActionTypeUtil.routes.dashboard.InboxView,
                tabBarIcon: ({ focused }) => (
                    focused ?                          <Image source={ActiveInbox} style={{width:24, height:24, marginBottom:3.5}}/>
                        :
                 <Image source={InboxIcon}  style={{width:24, height:24, marginBottom:3.5}}/>
                ),
                
              }} />

            <Tab.Screen name={ActionTypeUtil.routes.dashboard.WalletView} component={WalletView} 
            options={{
                tabBarLabel: ActionTypeUtil.routes.dashboard.WalletView,
                tabBarIcon: ({ focused }) => (
                    focused ?  <Image source={WalletIconActive}  style={{width:24, height:24, marginBottom:3.5}}/>
                    :
                 <Image source={WalletIconUnActive}  style={{width:24, height:24, marginBottom:3.5}}/>
                ),
              }} />

        </Tab.Navigator>
    )
        
}

// function DrawerNavigator(){
//     return(
        
//     <Drawer.Navigator>
//         <Drawer.Screen name="SideMenu" component={SideMenu} />
//     </Drawer.Navigator>

//     )
// }

function StackNavigator(){
    return (
        <Stack.Navigator>
          
        {
            routes.map(function (item) {
                return <Stack.Screen key={item.name}
                    name={item.name}
                    component={item.component}
                    options={Object.assign(item.options, defaultOption)}
                />
            })
        }
        
        <Stack.Screen name={"Home"} component={BottomTab}  options={defaultOption}></Stack.Screen>


    </Stack.Navigator>
    )
}








const Router = () => {

  

    // const isUserLoggedin = async () => {
    //     try{
    //         const token = await AsyncStorage.getItem('token')

    //         if(token){}
    //         // if(token !== null){
    //         //     setIsLoggedin(true)
    //         //     setLoadingState('not')

    //         // }else{
    //         //     setIsLoggedin(false)
    //         //     setLoadingState('not')
    //         // }

    //     }catch(err){
    //         setIsLoggedin(false)
    //         setLoadingState('not')
    //     }
    // }



    useEffect(() => { }, [])


    return <>
        <NavigationContainer ref={navigationRef}>
   
               <StackNavigator />

               
          
        </NavigationContainer>

    </>
}

export default Router