import React, { useState } from 'react';
import { Text, View, ScrollView, StyleSheet, Alert, Modal, Pressable } from 'react-native';

const PrivacyPolicy = () => {
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
    header:{
      fontWeight:'bold',
      fontSize:30,
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
          <Text style={styles.mainHeader}>Privacy Policy</Text>
            <Text style={styles.text}>
            {'\u2B24'} This privacy notice discloes the privacy practices for StandardOfCare.com. This privacy notice applies solely to information collected by this website. It will notify you of the following:{"\n"}1. What personally indentifiable information is collected from you through the website, how it is used and with whome it may be shared.{"\n"}
            2. What choices are available to you regarding the use of your data.{"\n"}{"\n"}
            3. The security procedures in place to protect the misuse of your information.{"\n"}{"\n"}
            4. How you can correct any inaccuaracies in the information.
            </Text>
          <Text style={styles.header}>Information Collection, Use, and Sharing</Text>
            <Text style={styles.text}>We are the sole owners of the information collected on this site. We only have access to/collect information that you voluntarily give us via email or other direct contact from you. We will not sell or rent this information to anyone. We will use your information to respond to you, regarding the reason you contacted us. We will not share your information with any third party outside of our organization, other than as necessary to fulfill your request, e.g. to ship an order. Unless you ask us not to, we may contact you via email in the future to tell you about specials, new products or services, or changes to this privacy policy.</Text>
          <Text style={styles.header}>Your Access to and Control Over Information</Text>
            <Text style={styles.text}>You may opt out of any future contacts from us at any time. You can do the following at any time by contacting us via the email address or phone number given on our website:{"\n"}{"\n"}
            a. See what data we have about you, if any.{"\n"}{"\n"}
            b. Change/correct any data we have about you.{"\n"}{"\n"}
            c. Have us delete any data we have about you.{"\n"}{"\n"}
            d. Express any concern you have about our use of your data.</Text>
          <Text style={styles.header}>Security</Text>
          <Text style={styles.text}>We take precautions to protect your information. When you submit sensitive information via the website, your information is protected both online and offline.{"\n"}{"\n"}
            Wherever we collect sensitive information (such as credit card data), that information is encrypted and transmitted to us in a secure way. You can verify this by looking for a lock icon in the address bar and looking for “https” at the beginning of the address of the Web page.{"\n"}{"\n"}
            While we use encryption to protect sensitive information transmitted online, we also protect your information offline. Only employees who need the information to perform a specific job (for example, billing or customer service) are granted access to personally identifiable information. The computers/servers in which we store personally identifiable information are kept in a secure environment.</Text>
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
      <Text style={styles.links}>Privacy Policy</Text>
      </Pressable>
    </View>
  );
};
export default PrivacyPolicy