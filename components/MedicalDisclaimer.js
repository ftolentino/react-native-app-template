import React, { useState } from 'react';
import { Text, View, ScrollView, StyleSheet, Alert, Modal, Pressable } from 'react-native';

const MedicalDisclaimer = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const styles = StyleSheet.create({
    text:{
      paddingTop:30,
      paddingBottom:30,
    },
    mainHeader:{
      color:'#1b69b9',
      fontSize:30,
      fontWeight:'bold',
      textAlign:'center',
    },
    links:{
      fontSize:12,
      justifyContent:'center',
      color:'#1b69b9',
      textAlign:'center',
      textDecorationLine:'underline',
      paddingBottom:10,
    },
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 22
    },
    modalView: {
      margin: 20,
      backgroundColor: "white",
      borderRadius: 20,
      padding: 30,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5
    },
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2
    },
    buttonClose: {
      backgroundColor: "#2196F3",
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center"
    },
  });

    return (
      <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <ScrollView scrollIndicatorInsets={{ right: 1}}>
              <Text style={styles.mainHeader}>Medical Disclaimer</Text>
              <Text style={styles.text}>All content found on the StandardofCare.com Website, including: text, images, audio, or other formats were created for informational purposes only. Offerings for continuing education credits are clearly identified and the appropriate target audience is identified. The Content is not intended to be a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition. Never disregard professional medical advice or delay in seeking it because of something you have read on this Website. If you think you may have a medical emergency, call your doctor, go to the emergency department, or call 911 immediately.{'\n'}{'\n'}
              Standard of Care does not recommend or endorse any specific tests, physicians, products, procedures, opinions, or other information that may be mentioned on StandardofCare.com. Reliance on any information provided by StandardofCare.com, Standard of Care employees, contracted writers, or medical professionals presenting content for publication to Standard of Care is solely at your own risk.{'\n'}{'\n'}
              The Site may contain health- or medical-related materials or discussions regarding sexually explicit disease states. If you find these materials offensive, you may not want to use our Site. The Site and its Content are provided on an “as is” basis. Links to educational content not created by Standard of Care are taken at your own risk. Standard of Care is not responsible for the claims of external websites and education companies.</Text>
            </ScrollView>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable onPress={() => setModalVisible(true)}>
        <Text style={styles.links}>Medical Disclaimer</Text>
      </Pressable>
    </View>
  );
};

export default MedicalDisclaimer