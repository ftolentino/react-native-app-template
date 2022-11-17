import * as React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import logo2 from '../assets/logo2.png';
import Footer from '../components/Footer';
import MenuScreen from '../Screens/Menu';
import BrowseArticles from '../Screens/Articles';
import MedicalLinks from '../Screens/MedicalLinks';
import About from '../Screens/About';
import ContinuedEducation from '../Screens/Education';
import MedicalFactoids from '../Screens/Facts';
import Advertise from '../Screens/Advertise';
import Contact from '../Screens/Contact';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

const CustomDrawer = props => {

  const styles = StyleSheet.create({
    viewStyle:{
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 20,
      backgroundColor: '#f6f6f6',
      marginBottom: 20,
    },
    image:{
      resizeMode: 'contain', 
      width: 180, 
      height: 180
    }
  });

  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <View style={styles.viewStyle}>
          <Image source={logo2} style={styles.image} />
        </View>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <Footer />
    </View>
  );
};

const DrawerNavigator = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName='Menu'
        edgeWith={100}
        hideStatusBar={false}
        drawerStyle={{
          backgroundColor:'#e6e6e6',
          width:250
        }}
        screenOptions={{
          headerShown: true,
          swipeEnabled: true,
          gestureEnabled: true,
          headerTitleAlign: 'center',

          drawerActiveBackgroundColor:'#d3d3d3',
          drawerType:'slide',

          headerStyle: {
          backgroundColor: '#1b69b9'
          },
          headerTintColor: '#ffffff',
          headerTitleStyle: {
          fontSize: 25,
          fontWeight: 'bold'
          }
        }}
        drawerContent={props => <CustomDrawer {...props} />}>
        <Drawer.Screen
          name='Home' 
          component={MenuScreen}
        />
        <Drawer.Screen
          name='Articles' 
          component={BrowseArticles}
          options={{
            title: 'Browse Articles'
          }}
        />
        <Drawer.Screen
          name='Medical Links' 
          component={MedicalLinks}
        />
        <Drawer.Screen
          name='About Dr Cohen' 
          component={About}
        />
        <Drawer.Screen
          name='Continued Education' 
          component={ContinuedEducation}
          options={{
            title:'Continued Medical Education'
          }}
        />
        <Drawer.Screen
          name='Medical' 
          component={MedicalFactoids}
          options={{
            title: 'Medical Facts'
          }}
        />
        <Drawer.Screen
          name='Advertise With Us' 
          component={Advertise}
        />
        <Drawer.Screen
          name='Contact' 
          component={Contact}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default DrawerNavigator;