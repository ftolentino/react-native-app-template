import React, { useCallback } from 'react';
import { View, StyleSheet, TextInput, Text, Pressable, Linking, ScrollView } from 'react-native';
import StickyFooter from '../components/StickyFoot';

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  },
  input:{
    height:40,
    margin:10,
    borderWidth:1,
    padding:10,
    marginHorizontal: 'auto'
  },
  button:{
    alignItems:'center',
    justifyContent:'center',
    paddingVertical:12,
    paddingHorizontal:32,
    borderRadius:4,
    elevation:3,
    backgroundColor:'#1b69b9',
    paddingBottom:10,
  },
  buttonText: {
    fontSize:16,
    lineHeight:21,
    fontWeight:'bold',
    letterSpacing:1,
    color:'#EEEEEE',
  },
  divider: {
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: 20,
    paddingRight: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
});

const Advertise = (props) => {
  const { title = 'Submit'} = props;

  const [name, onChangeText] = React.useState('');
  const [email, onChangeEmail] = React.useState('');
  const [company, onChangeCompany] = React.useState('');
  const [telephone, onChangeTelephone] = React.useState('');
  const [subject, onChangeSubject] = React.useState('');
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
    if(!name.trim()) {
      alert('Please Enter Name');
      return;
    }
    if(!email.trim()) {
      alert('Please Enter Email');
      return;
    }
    if(!subject.trim()) {
      alert('Please Enter Subject');
      return;
    }
    if(!company.trim()) {
      alert('Please Enter Company');
      return;
    }
    if(telephone.length != 10) {
      alert('Please Enter A Valid Phone Number');
      return;
    }
    if(!comment.trim()) {
      alert('Please Enter Comment');
      return;
    }
    else handlePress();
  }



  return (
    <ScrollView  scrollIndicatorInsets={{ right: 1}} keyboardDismissMode='interactive'>
      <View style={styles.container}>
        <Text style={{
          alignItems:'center',
          paddingTop:50,
          paddingBottom:20,
          fontSize:40,
          fontWeight:'bold',
          color:'#1A6AB9',
        }}>Need Advertising?</Text>
        <View style={{ paddingBottom:65 }}>
          <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value={name}
            width={350}
            placeholder="Name"
            placeholderTextColor="#1b69b9"/>
          <TextInput
            style={styles.input}
            onChangeText={onChangeEmail}
            value={email}
            width={350}
            placeholder="Email"
            placeholderTextColor="#1b69b9"
            keyboardType='email-address'
            autoCapitalize='none'/>
          <TextInput
            style={styles.input}
            onChangeText={onChangeCompany}
            value={company}
            width={350}
            placeholder="Company"
            placeholderTextColor="#1b69b9"
            keyboardType='text'/>
          <TextInput
            style={styles.input}
            onChangeText={onChangeTelephone}
            value={telephone}
            width={350}
            placeholder="Telephone"
            placeholderTextColor="#1b69b9"
            keyboardType='number-pad'/>
          <TextInput
            style={styles.input}
            onChangeText={onChangeSubject}
            value={subject}
            width={350}
            placeholder="Subject"
            placeholderTextColor="#1b69b9"
            keyboardType='text'/>
          <TextInput
            style={styles.input}
            onChangeText={onChangeComment}
            value={comment}
            multiline={true}
            numberOfLines={10}
            width={350}
            textAlignVertical='top'
            placeholder='Please enter some details about your advertising needs'
            placeholderTextColor="#1b69b9"
            keyboardType='text'/>
        </View>
        <Pressable style={styles.button} onPress={ () => { checkTextInput();}}>
          <Text style={styles.buttonText}>{title}</Text>
        </Pressable>
      </View>
      <View style={styles.divider} />
      <StickyFooter />
    </ScrollView>
  )
}

export default Advertise