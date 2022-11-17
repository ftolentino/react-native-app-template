import React from 'react';
import { View, Text, StyleSheet, Linking, ScrollView } from 'react-native';
import StickyFooter from '../components/StickyFoot';

const Education = () => {
  const styles = StyleSheet.create({
    body:{
      alignItems:'center', 
      justifyContent:'center', 
      paddingTop:50,
      flexDirection:'row',
      width:370,
      paddingLeft:5,
    },
    cme:{
      alignItems:'center', 
      justifyContent:'center', 
      paddingTop:15,
      flexDirection:'row',
      width:370,
      paddingLeft:5,
      fontSize:12,
    },
    name:{
      flex:1,
      alignItems:'center',
      justifyContent:'center',
    },
    linking:{
      textDecorationLine:'underline',
      fontSize:14,
      color:'blue',
      padding:'auto',
      textAlign:'center',
    },
    divider: {
      paddingTop: 16,
      paddingBottom: 16,
      paddingLeft: 20,
      paddingRight: 20,
      borderBottomWidth: 1,
      borderBottomColor: '#cccccc',
    }
  });

  return (
    <ScrollView scrollIndicatorInsets={{ right: 1}}>
      <View style={styles.body}>
        <View style={styles.date}>
          <Text style={styles.text}>10.8.19</Text>
        </View>
        <View style={styles.name}>
          <Text style={styles.linking} onPress={() => Linking.openURL('https://www.clevelandclinicmeded.com/online/')}>Cleveland Clinic Center for Continuing Education</Text>
        </View>
        <View style={styles.state}>
          <Text style={styles.text}>OH</Text>
        </View>
      </View>
      <View style={styles.divider} />
      <View style={styles.cme}>
        <View style={styles.date}>
          <Text style={styles.text}>10.8.19</Text>
        </View>
        <View style={styles.name}>
        <Text style={styles.linking} onPress={() => Linking.openURL('https://cme4life.com/')}>CME 4 Life</Text>
        </View>
        <View style={styles.state}>
          <Text style={styles.text}>FL</Text>
        </View>
      </View>
      <View style={styles.divider} />
      <View style={styles.cme}>
        <View style={styles.date}>
          <Text style={styles.text}>10.8.19</Text>
        </View>
        <View style={styles.name}>
        <Text style={styles.linking} onPress={() => Linking.openURL('http://www.cmecorner.com')}>CME Corner</Text>
        </View>
        <View style={styles.state}>
          <Text style={styles.text}>VA</Text>
        </View>
      </View>
      <View style={styles.divider} />
      <View style={styles.cme}>
        <View style={styles.date}>
          <Text style={styles.text}>10.8.19</Text>
        </View>
        <View style={styles.name}>
        <Text style={styles.linking} onPress={() => Linking.openURL('https://www.cmeuniversity.com/')}>CME University</Text>
        </View>
        <View style={styles.state}>
          <Text style={styles.text}>CO</Text>
        </View>
      </View>
      <View style={styles.divider} />
      <View style={styles.cme}>
        <View style={styles.date}>
          <Text style={styles.text}>10.8.19</Text>
        </View>
        <View style={styles.name}>
        <Text style={styles.linking} onPress={() => Linking.openURL('https://www.cmezone.com/')}>CME Zone</Text>
        </View>
        <View style={styles.state}>
          <Text style={styles.text}>NY</Text>
        </View>
      </View>
      <View style={styles.divider} />
      <View style={styles.cme}>
        <View style={styles.date}>
          <Text style={styles.text}>10.8.19</Text>
        </View>
        <View style={styles.name}>
        <Text style={styles.linking} onPress={() => Linking.openURL('https://www.cmeiconference.com/')}>Continuing Medical Education Institute</Text>
        </View>
        <View style={styles.state}>
          <Text style={styles.text}>MN</Text>
        </View>
      </View>
      <View style={styles.divider} />
      <View style={styles.cme}>
        <View style={styles.date}>
          <Text style={styles.text}>10.8.19</Text>
        </View>
        <View style={styles.name}>
        <Text style={styles.linking} onPress={() => Linking.openURL('https://www.freecme.com/')}>Free CME</Text>
        </View>
        <View style={styles.state}>
          <Text style={styles.text}>NC</Text>
        </View>
      </View>
      <View style={styles.divider} />
      <View style={styles.cme}>
        <View style={styles.date}>
          <Text style={styles.text}>10.8.19</Text>
        </View>
        <View style={styles.name}>
        <Text style={styles.linking} onPress={() => Linking.openURL('https://www.med-iq.com/')}>Med-IQ</Text>
        </View>
        <View style={styles.state}>
          <Text style={styles.text}>CT</Text>
        </View>
      </View>
      <View style={styles.divider} />
      <View style={styles.cme}>
        <View style={styles.date}>
          <Text style={styles.text}>10.8.19</Text>
        </View>
        <View style={styles.name}>
        <Text style={styles.linking} onPress={() => Linking.openURL('https://www.mycme.com/')}>MyCME</Text>
        </View>
        <View style={styles.state}>
          <Text style={styles.text}>NJ</Text>
        </View>
      </View>
      <View style={styles.divider} />
      <View style={styles.cme}>
        <View style={styles.date}>
          <Text style={styles.text}>10.8.19</Text>
        </View>
        <View style={styles.name}>
        <Text style={styles.linking} onPress={() => Linking.openURL('https://www.hmpeducation.com/')}>NACCME</Text>
        </View>
        <View style={styles.state}>
          <Text style={styles.text}>GA</Text>
        </View>
      </View>
      <View style={styles.divider} />
      <View style={styles.cme}>
        <View style={styles.date}>
          <Text style={styles.text}>10.8.19</Text>
        </View>
        <View style={styles.name}>
        <Text style={styles.linking} onPress={() => Linking.openURL('https://www.netce.com/')}>NETCE</Text>
        </View>
        <View style={styles.state}>
          <Text style={styles.text}>CA</Text>
        </View>
      </View>
      <View style={styles.divider} />
      <View style={styles.cme}>
        <View style={styles.date}>
          <Text style={styles.text}>10.8.19</Text>
        </View>
        <View style={styles.name}>
        <Text style={styles.linking} onPress={() => Linking.openURL('https://www.opencme.com/')}>Open CME</Text>
        </View>
        <View style={styles.state}>
          <Text style={styles.text}>US</Text>
        </View>
      </View>
      <View style={styles.divider} />
      <View style={styles.cme}>
        <View style={styles.date}>
          <Text style={styles.text}>10.8.19</Text>
        </View>
        <View style={styles.name}>
        <Text style={styles.linking} onPress={() => Linking.openURL('https://www.gotoper.com/')}>Physicians Education Resource</Text>
        </View>
        <View style={styles.state}>
          <Text style={styles.text}>NJ</Text>
        </View>
      </View>
      <View style={styles.divider} />
      <View style={styles.cme}>
        <View style={styles.date}>
          <Text style={styles.text}>10.8.19</Text>
        </View>
        <View style={styles.name}>
        <Text style={styles.linking} onPress={() => Linking.openURL('https://spotlight.pro-c.me/')}>Pro-CME</Text>
        </View>
        <View style={styles.state}>
          <Text style={styles.text}>NY</Text>
        </View>
      </View>
      <View style={styles.divider} />
      <View style={styles.cme}>
        <View style={styles.date}>
          <Text style={styles.text}>10.8.19</Text>
        </View>
        <View style={styles.name}>
        <Text style={styles.linking} onPress={() => Linking.openURL('https://suiteweb.atpointofcare.com/#library')}>Projects in Knowledge</Text>
        </View>
        <View style={styles.state}>
          <Text style={styles.text}>NJ</Text>
        </View>
      </View>
      <View style={styles.divider} />
      <View style={styles.cme}>
        <View style={styles.date}>
          <Text style={styles.text}>10.8.19</Text>
        </View>
        <View style={styles.name}>
        <Text style={styles.linking} onPress={() => Linking.openURL('https://hmpeducation.com/cme')}>Psychiatry and Behavioral Health Learning Network</Text>
        </View>
        <View style={styles.state}>
          <Text style={styles.text}>PA</Text>
        </View>
      </View>
      <View style={styles.divider} />
      <View style={styles.cme}>
        <View style={styles.date}>
          <Text style={styles.text}>10.8.19</Text>
        </View>
        <View style={styles.name}>
        <Text style={styles.linking} onPress={() => Linking.openURL('https://realcme.realcme.com/learner/courses')}>Real CME</Text>
        </View>
        <View style={styles.state}>
          <Text style={styles.text}>NY</Text>
        </View>
      </View>
      <View style={styles.divider} />
      <View style={styles.cme}>
        <View style={styles.date}>
          <Text style={styles.text}>10.8.19</Text>
        </View>
        <View style={styles.name}>
        <Text style={styles.linking} onPress={() => Linking.openURL('https://uc.cloud-cme.com/default.aspx')}>University of Cincinnati CME</Text>
        </View>
        <View style={styles.state}>
          <Text style={styles.text}>OH</Text>
        </View>
      </View>
      <View style={styles.divider} />
      <View style={styles.cme}>
        <View style={styles.date}>
          <Text style={styles.text}>10.8.19</Text>
        </View>
        <View style={styles.name}>
        <Text style={styles.linking} onPress={() => Linking.openURL('https://www.upmcphysicianresources.com/')}>UPMC Physician Resources</Text>
        </View>
        <View style={styles.state}>
          <Text style={styles.text}>PA</Text>
        </View>
      </View>
      <View style={styles.divider} />
      <View style={styles.cme}>
        <View style={styles.date}>
          <Text style={styles.text}>10.8.19</Text>
        </View>
        <View style={styles.name}>
        <Text style={styles.linking} onPress={() => Linking.openURL('https://lww.com/pages/default.aspx')}>Wolters Kluwer</Text>
        </View>
        <View style={styles.state}>
          <Text style={styles.text}>MD</Text>
        </View>
      </View>
      <View style={styles.divider} />
      <StickyFooter />
    </ScrollView>
  )
}

export default Education