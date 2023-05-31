import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from './Screens/Intro/SplashScreen';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/dist/Octicons';
import Icon1 from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { View } from 'react-native';

const Tab = createBottomTabNavigator();

/*/ Authantication Components /*/

import Lg from './Screens/Ls/Lg';
import Signup from './Screens/Ls/Signup';
import Dl from './Screens/Ls/Dl';
import Login from './Screens/Ls/Login';
import Mobile from './Screens/Ls/Mobile';
import Code from './Screens/Ls/Code';
import Birth from './Screens/Ls/Birth';
import Gender from './Screens/Ls/Gender';
import Username from './Screens/Ls/Username';
import Finish from './Screens/Ls/Finish';

/*/ Authantication Components /*/

/*/ Main Screen /*/

import Home from './Screens/Main/Home';
import Search from './Screens/Main/Search';
import Create from './Screens/Main/Create';
import Notification from './Screens/Main/Notification';
import Account from './Screens/Main/Account';



/*/ Main Screen /*/


/*/Post params/*/

import Mainpost from './Screens/Main/Mainpost';

/*/Post params/*/






const Stack = createStackNavigator();


const SL = () => {
  return (


    <Stack.Navigator


    >
      <Stack.Screen name="SplashScreen" component={SplashScreen}

        options={{

          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          transitionSpec: {
            open: {
              animation: 'timing',
              config: {
                duration: 500,
              },
            },
            close: {
              animation: 'timing',
              config: {
                duration: 500,
              },
            },
          },

        }}

      />
      <Stack.Screen name="Lg" component={Lg}

        options={{

          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          transitionSpec: {
            open: {
              animation: 'timing',
              config: {
                duration: 500,
              },
            },
            close: {
              animation: 'timing',
              config: {
                duration: 500,
              },
            },
          },

        }}

      />
      <Stack.Screen name="DL" component={Dl}

        options={{

          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          transitionSpec: {
            open: {
              animation: 'timing',
              config: {
                duration: 500,
              },
            },
            close: {
              animation: 'timing',
              config: {
                duration: 500,
              },
            },
          },

        }}

      />
      <Stack.Screen name="Signup" component={Signup}

        options={{

          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          transitionSpec: {
            open: {
              animation: 'timing',
              config: {
                duration: 500,
              },
            },
            close: {
              animation: 'timing',
              config: {
                duration: 500,
              },
            },
          },

        }}

      />
      <Stack.Screen name="Username" component={Username}

        options={{

          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          transitionSpec: {
            open: {
              animation: 'timing',
              config: {
                duration: 500,
              },
            },
            close: {
              animation: 'timing',
              config: {
                duration: 500,
              },
            },
          },

        }}

      />
      <Stack.Screen name="Login" component={Login}

        options={{

          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          transitionSpec: {
            open: {
              animation: 'timing',
              config: {
                duration: 500,
              },
            },
            close: {
              animation: 'timing',
              config: {
                duration: 500,
              },
            },
          },

        }}

      />
      <Stack.Screen name="Mobile" component={Mobile}

        options={{

          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          transitionSpec: {
            open: {
              animation: 'timing',
              config: {
                duration: 500,
              },
            },
            close: {
              animation: 'timing',
              config: {
                duration: 500,
              },
            },
          },

        }}

      />
      <Stack.Screen name='Code' component={Code}

        options={{

          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          transitionSpec: {
            open: {
              animation: 'timing',
              config: {
                duration: 500,
              },
            },
            close: {
              animation: 'timing',
              config: {
                duration: 500,
              },
            },
          },

        }}

      />
      <Stack.Screen name="Birth" component={Birth}

        options={{

          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          transitionSpec: {
            open: {
              animation: 'timing',
              config: {
                duration: 500,
              },
            },
            close: {
              animation: 'timing',
              config: {
                duration: 500,
              },
            },
          },

        }}


      />
      <Stack.Screen name="Gender" component={Gender}

        options={{

          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          transitionSpec: {
            open: {
              animation: 'timing',
              config: {
                duration: 500,
              },
            },
            close: {
              animation: 'timing',
              config: {
                duration: 500,
              },
            },
          },

        }}

      />
      <Stack.Screen name="Finish" component={Finish}

        options={{

          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          transitionSpec: {
            open: {
              animation: 'timing',
              config: {
                duration: 500,
              },
            },
            close: {
              animation: 'timing',
              config: {
                duration: 500,
              },
            },
          },

        }}

      />
      <Stack.Screen name="MyTabs" component={MyTabs} options={{
        headerShown: false,

        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        transitionSpec: {
          open: {
            animation: 'timing',
            config: {
              duration: 500,
            },
          },
          close: {
            animation: 'timing',
            config: {
              duration: 500,
            },
          },
        },
      }} />

      <Stack.Screen name='Mainpost' component={Mainpost} 
      
      options ={{

        headerShown: false,

        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        transitionSpec: {
          open: {
            animation: 'timing',
            config: {
              duration: 500,
            },
          },
          close: {
            animation: 'timing',
            config: {
              duration: 500,
            },
          },
        },

      }}
      
      />
    </Stack.Navigator>

  )
}





function MyTabs() {
  return (
    <Tab.Navigator

      screenOptions={{
        tabBarStyle: { position: 'absolute', backgroundColor: '#09161a', padding: 0, right: 10, left: 10, bottom: 20, borderRadius: 10, borderTopColor: 'transparent', shadowOffset: { height: 6, width: 0 }, shadowOpacity: 0.1, shadowRadius: 3, elevation: 3    },
        tabBarShowLabel: false,
        headerShown: false
      }}



    >
      <Tab.Screen name="Home" component={Home}

        options={{

          tabBarIcon: ({ focused }) =>
            focused ?
            <View>
            <Icon name="home" size={25} color="#44f2c4" />

            <View style={{alignItems:'center'}}>
             <View style={{width:6 , height:6 , backgroundColor:'#fff' , borderRadius:200 , top:3}}>

             </View>
             </View> 
            </View>
            : <Icon name="home" size={24} color="#fff" />

        }}

      />
      <Tab.Screen name="Search" component={Search}

        options={{

          tabBarIcon: ({ focused }) =>
            focused ?
            
             <View>
            
            <Icon name="search" size={25} color="#44f2c4" />

            <View style={{alignItems:'center'}}>
             <View style={{width:6 , height:6 , backgroundColor:'#fff' , borderRadius:200 , top:3}}>

             </View>
             </View> 
              
            
             </View>
             : <Icon name="search" size={24} color="#fff" />

        }}

      />
      <Tab.Screen name="Create" component={Create}

        options={{

          tabBarIcon: ({ focused }) =>
            focused ? 

            <View>
            

          

            <Icon name="diff-added" size={25} color="#44f2c4" />


            <View style={{alignItems:'center'}}>
             <View style={{width:6 , height:6 , backgroundColor:'#fff' , borderRadius:200 , top:3}}>

             </View>
             </View> 
            
             </View>
            
             : <Icon name="diff-added" size={24} color="#fff" />

        }}

      />
      <Tab.Screen name='Notification' component={Notification}

        options={{

          tabBarIcon: ({ focused }) =>
            focused ? 
            
             <View>
            <Icon name="bell" size={25} color="#44f2c4" /> 


            <View style={{alignItems:'center'}}>
             <View style={{width:6 , height:6 , backgroundColor:'#fff' , borderRadius:200 , top:3}}>

             </View>
             </View> 
            
            </View>
            
            : <Icon name="bell" size={24} color="#fff" />

        }}

      />
      <Tab.Screen name='Account' component={Account}

        options={{

          tabBarIcon: ({ focused }) =>
            focused ?  
            
            <View>


              
            
            <Icon1 name="account-circle-outline" size={30} color="#44f2c4" /> 


            <View style={{alignItems:'center'}}>
             <View style={{width:6 , height:6 , backgroundColor:'#fff' , borderRadius:200 , top:3}}>

             </View>
             </View> 
            
            </View>
            
            : <Icon1 name="account-circle-outline" size={29} color="#fff" />

        }}


      />
    </Tab.Navigator>
  );
}









export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>

        <SL />




      </NavigationContainer>
    </SafeAreaProvider>

  );
}