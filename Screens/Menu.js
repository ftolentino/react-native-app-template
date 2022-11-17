import React from 'react';
import { View, Text, StyleSheet, ScrollView, Platform } from 'react-native';
import StickyFooter from '../components/StickyFoot';
import SearchInput from '../components/SearchBar';

const HomeScreen = () => {

  const styles = StyleSheet.create({
    container:{
      flex:1,
      justifyContent:'center',
      paddingTop:'auto',
      paddingBottom: 230
    },
    bold:{
      alignContent:'center', 
      color:'#1b69b9', 
      fontWeight:'bold', 
      fontSize:40,
      textAlign: 'center', 
      paddingTop:30,
      paddingLeft:5,
      paddingRight:5,
    },
    text:{
      fontSize:18,
      fontWeight:'bold',
      textAlign: 'center',
      paddingTop: 'auto',
      paddingBottom: 'auto',
      paddingLeft:5,
      paddingRight:5,
    },
    paragraph:{
      fontSize:18,
      textAlign:'center',
      paddingTop:30,
      paddingLeft:5,
      paddingRight:5,
      paddingBottom: 'auto',
    },
  });

  return (
    <ScrollView behavior={Platform.OS === "ios" ? "padding" : "height"}>
      <View style={styles.container}>
        <Text style={styles.bold}>Welcome to the Standard of Care</Text>
        <Text style={styles.text}>Where medical professionals, researchers, students, and the general populace can find essential medical information.</Text>
        <SearchInput/>
        <Text style={styles.paragraph}>After a lifetime of experience as a practicing medical professional, Dr. Stephen Cohen has created a repository of insightful medical information. Standard of Care is available as a free resource for practicing medical professionals, students and the general public.</Text>
      </View>
      <StickyFooter />
    </ScrollView>
  )
}

export default HomeScreen