import React from 'react';
import { View, Text, StyleSheet, Linking, ScrollView } from 'react-native';
import { useFonts } from 'expo-font';
import StickyFooter from '../components/StickyFoot';

const MedicalLinks = () => {
  let [loaded] = useFonts({
    HelveticaNeue: require('./../assets/fonts/HelveticaNeue.ttf'),
  });

  if (!loaded) {
    return null;
  }

  const styles = StyleSheet.create({
    container: {
      flex:1,
      margin:'auto',
      justifyContent:'center',
    },
    title:{
      alignItems:'center',
      paddingTop:50,
      addingBottom:130,
      textAlign: 'center',
      fontSize:45,
      fontWeight:'bold',
      color:'#1b69b9',
      margin: 'auto'
    },
    links:{
      fontFamily: 'HelveticaNeue',
      fontSize:15,
      paddingTop:15,
      paddingLeft:5,
      color:'#1b69b9', 
      textAlign: 'left',
      textDecorationLine: 'underline',
      margin: 'auto'
    },
    item: {
      paddingTop: 16,
      paddingBottom:16,
      paddingLeft: 20,
      paddingRight: 20,
      borderBottomWidth: 1,
      borderBottomColor: '#cccccc',
    },
    title:{
      fontSize:30,
      fontWeight:'bold',
      textAlign:'center',
      color:'#1b69b9'
    }
  });
  
  return (
    <ScrollView scrollIndicatorInsets={{ right: 1 }}>
      <View style={styles.container}>
        <Text style={styles.title}>Medical Links</Text>
        <View style={styles.item} />
          <Text style={styles.links
            } onPress={() => Linking.openURL('https://www.anatomyatlases.org/')}>Anatomy Textbooks and Anatomy Atlases</Text>
          <View style={styles.item} />
          <Text style={styles.links
            } onPress={() => Linking.openURL('https://www.asbestos.com/mesothelioma/')}>Asbestos Mesothelioma Information</Text>
          <View style={styles.item} />
          <Text style={styles.links
            } onPress={() => Linking.openURL('https://clincalc.com/cardiology/ascvd/pooledcohort.aspx')}>Clin Calc Pooled Cohort Risk Assessment Equations</Text>
          <View style={styles.item} />
          <Text style={styles.links
            } onPress={() => Linking.openURL('https://www.healthday.com/')}>Healthday News for Healthier Living</Text>
          <View style={styles.item} />
          <Text style={styles.links
            } onPress={() => Linking.openURL('https://www.mayoclinic.org/')}>Mayo Clinic</Text>
          <View style={styles.item} />
          <Text style={styles.links
            } onPress={() => Linking.openURL('https://www.mdlinx.com/')}>MD Linx</Text>
          <View style={styles.item} />
          <Text style={styles.links
            } onPress={() => Linking.openURL('https://www.medicinenet.com/')}>Medicinenet</Text>
          <View style={styles.item} />
          <Text style={styles.links
            } onPress={() => Linking.openURL('https://www.medpagetoday.com/')}>MedPage Today</Text>
          <View style={styles.item} />
          <Text style={styles.links
            } onPress={() => Linking.openURL('https://www.nejm.org/')}>New England Journal of Medicine</Text>
          <View style={styles.item} />
          <Text style={styles.links
            } onPress={() => Linking.openURL('https://www.pleuralmesothelioma.com/cancer/stage-3/')}>Pleural Mesothelioma</Text>
          <View style={styles.item} />
          <Text style={styles.links
            } onPress={() => Linking.openURL('https://reachmd.com/')}>Reach MD</Text>
          <View style={styles.item} />
          <Text style={styles.links
            } onPress={() => Linking.openURL('https://www.cancer.org/')}>The American Cancer Society</Text>
          <View style={styles.item} />
          <Text style={styles.links
            } onPress={() => Linking.openURL('https://www.bmj.com/')}>The BMJ</Text>
          <View style={styles.item} />
          <Text style={styles.links
            } onPress={() => Linking.openURL('https://www.cdc.gov/')}>The Centers for Disease Control</Text>
          <View style={styles.item} />
          <Text style={styles.links
            } onPress={() => Linking.openURL('https://www.nih.gov/health-information')}>The National Institutes for Health</Text>
          <View style={styles.item} />
        <StickyFooter />
      </View>
    </ScrollView>
  )
}

export default MedicalLinks