import React from 'react';
import { Text, View, StyleSheet, Linking } from 'react-native';
import { MaterialIcons, Entypo } from '@expo/vector-icons';
import MedicalDisclaimer from './MedicalDisclaimer';
import PrivacyPolicy from './PrivacyPolicy';

const StickyFooter = () => {

  
  const styles = StyleSheet.create({
    footer: {
      flex:1,
      backgroundColor: "#d3d3d3",
      padding: 20,
      alignItems:'center',
    },
    body:{
      justifyContent:'space-evenly',
      flexWrap:'wrap',
      flexDirection:'row',
      width:380,
    },   
    links:{
      fontSize:12,
      justifyContent:'center',
      color:'#1b69b9',
      textAlign:'center',
      textDecorationLine:'underline',
      paddingBottom:10,
      alignItems: 'center'
    },
    viewStyle: {
      paddingTop:15,
      flexDirection:'row',
    },
    banner: {
      textAlign:'center',
      fontSize:15,
      width:'100%',
      color:'white',
      backgroundColor:'#172E55',
    },
  });

  return (
    <View>
      <View style={styles.footer}>
        <View style={styles.body}>
        <PrivacyPolicy/>
        <MedicalDisclaimer/>
        </View>
        <View style={styles.viewStyle}>
          <MaterialIcons name="facebook" size={30} color="#1b69b9" onPress={() => Linking.openURL('https://www.facebook.com/astandardofcare')} />
          <Entypo name="twitter-with-circle" size={30} color="#1b69b9" onPress={() => Linking.openURL('https://twitter.com/astandardofcare')} />
          <Entypo name="linkedin-with-circle" size={30} color="#1b69b9" onPress={() => Linking.openURL('https://www.linkedin.com/in/stephen-cohen-28a42365/')} />
        </View>
      </View>
      <View>
        <Text style={styles.banner}> &copy; 2022 Standard of Care</Text>
      </View>
    </View>
  );
}

export default StickyFooter;