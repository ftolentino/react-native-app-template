import React, { useCallback } from 'react';
import { View, StyleSheet, TextInput, Text, Pressable, Linking, Keyboard, Platform, ScrollView } from "react-native";
import StickyFooter from '../components/StickyFoot';


const styles = StyleSheet.create({
  input:{
    height:40,
    margin:10,
    borderWidth:1,
    padding:10,
    width: 300,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#1b69b9',
    paddingBottom:10,
    marginBottom: 100,
  },
  buttonText: {
    fontSize:16,
    lineHeight:21,
    fontWeight:'bold',
    letterSpacing:1,
    color:'#EEEEEE',
  },
});

const Contact = (props) => {
  const { title = 'Submit'} = props;
  const [email, onChangeEmail] = React.useState('');
  const [subject, onChangeText] = React.useState('');
  const [comment, onChangeComment] = React.useState('');
  const emailAddress = 'example@gmail.com';
  const url = `mailto:${emailAddress}?subject=${subject}&body=${comment}`;
  const handlePress = useCallback(async () => {
    const supported = await Linking.canOpenURL(url);
    if (supported) {
      await Linking.openURL(url);
    }
  }, [url]);

  const checkTextInput = () => {
    if(!email.trim()) {
      alert('Please Enter Email');
      return;
    }
    if (!subject.trim()) {
      alert('Please Enter Subject');
      return;
    }
    if (!comment.trim()) {
      alert('Please Submit Question or Comment');
      return;
    }
    if (!subject.trim()) {
      alert('Please Enter Subject');
      return;
    }
    else handlePress();
  }

  return (
    <ScrollView
      behavior={Platform.OS === "ios" ? "padding" : "height"}>
      <View style={{ alignItems:'center', justifyContent:'center'}}>
        <Text style={{
          alignItems:'center',
          paddingTop:50,
          paddingBottom:20,
          fontSize:40,
          fontWeight:'bold',
          color:'#1A6AB9',
          }}>Reach Out</Text>
        <View style={{ paddingBottom: 150}}>
          <TextInput
            style={styles.input}
            onChangeText={onChangeEmail}
            value={email}
            placeholder="Email"
            placeholderTextColor="#1b69b9"
            keyboardType='email-address'/>
          <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value={subject}
            placeholder="Subject"
            placeholderTextColor="#1b69b9"
            keyboardType="text"/>
          <TextInput
            style={styles.input}
            onChangeText={onChangeComment}
            value={comment}
            multiline = {true}
            numberOfLines = {10}
            placeholder="Question or Comment"
            placeholderTextColor="#1b69b9"
            keyboardType="text"/>
        </View>
        <Pressable style={styles.button} onPress={ () =>
        { checkTextInput();}}>
          <Text style={styles.buttonText}>{title}</Text>
        </Pressable>  
      </View>
      <StickyFooter />
    </ScrollView>
  )
}

export default Contact