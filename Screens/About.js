import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';
import cohen from '../assets/cohen.png';
import logo2 from '../assets/logo2.png';
import StickyFooter from '../components/StickyFoot';

const B = (props) => <Text style={{fontWeight: 'bold'}}>{props.children}</Text>

const About = () => {

  const styles = StyleSheet.create({
    body:{
      flex:1,
      alignItems:'center',
      justifyContent:'center',
      paddingTop:75,
      paddingLeft:15,
      paddingRight:15,
    },
    image:{
      width:100, 
      height:100, 
      borderBottomLeftRadius:20, 
      borderTopRightRadius:20, 
      justifyContent:'space-around'
    },
    logo:{
      resizeMode:'contain',
      width:275, 
      height:275
    },
    text:{
      paddingTop:30
    },
    text2:{
      paddingBottom:30
    }
  });

  return (
    <ScrollView scrollIndicatorInsets={{ right: 1}}>
      <View style={styles.body}>
        <Image source={cohen} style={styles.image} />
        <Text style={styles.text}>
        Born and raised in Brooklyn, NY.{"\n"}{"\n"}
        Graduated Thomas Jefferson HS Brooklyn NY. 1961, Graduated University Miami, Coral Gables Florida BS 1965, Graduated University of Oklahoma Health Science Center MD 1969.{"\n"}{"\n"}
        Internship niversity of Oklahoma 1970. Medical residency University of Washington, Seattle 1971, Fellowship Hematology-Oncology Walter Reed Medical Center, 1972-4, Assistant Chief Hematology-Oncology Fitzsimmons Army Hospital 1974-5, Private practice San Antonio, Texas 1975-2018.{"\n"}{"\n"}
        Board Certified: Internal Medicine, Hematology, Medical Oncology
        </Text>
        <Image source={logo2} style={styles.logo} />
        <Text style={styles.text2}><B>The Standard of Care</B> medical information repository has been curated by Dr. Stephen Cohen as a resource of considerable detail. The information contained is available for medical professionals, students and the general public to be used free of charge. Contents of the Standard of Care database are available for informational purposes alone. If you are a member of the public or not a licensed member of the medical profession, we recommend that you consult a physician or in the case of an emergency go to the nearest hospital or urgent care facility if you are experiencing a medical problem.</Text>
      </View>
      <StickyFooter />
    </ScrollView>
  )
}

export default About