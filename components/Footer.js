import * as React from 'react';
import { View, TouchableOpacity, Linking, StyleSheet } from 'react-native';
import { MaterialIcons, Entypo } from '@expo/vector-icons'; 

const Footer = () => {

  const styles = StyleSheet.create({
    body:{
      position: 'absolute',
      right: 0,
      left: 0,
      bottom: 0,
      backgroundColor: '#f6f6f6',
      padding: 20,
    },
    viewStyle:{
      flexDirection:'row',
      justifyContent:'space-evenly'
    }
  });
  return (
    <TouchableOpacity style={styles.body}>
      <View style={styles.viewStyle}>
        <MaterialIcons name="facebook" size={30} color="#1b69b9" onPress={() => Linking.openURL('https://www.facebook.com/astandardofcare')} />
        <Entypo name="twitter-with-circle" size={30} color="#1b69b9" onPress={() => Linking.openURL('https://twitter.com/astandardofcare')} />
        <Entypo name="linkedin-with-circle" size={30} color="#1b69b9" onPress={() => Linking.openURL('https://www.linkedin.com/in/stephen-cohen-28a42365/')} />
      </View>
    </TouchableOpacity>
  );
}

export default Footer;