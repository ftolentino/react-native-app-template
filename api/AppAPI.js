import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, ScrollView, ActivityIndicator } from "react-native";
import StickyFooter from "../components/StickyFoot";

const AppAPI = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ffffff',
      alignItems: 'center',
      justifyContent: 'center',
      paddingLeft: 10,
      paddingRight: 10
    },
    horizontal:{
      flexDirection:"row",
      justifyContent:'center',
      backgroundColor:'#ffffff'
    },
    postText:{
      fontSize:30,
      fontWeight:'bold',
    },
    bodyText:{
      fontSize:20,
      color:'black',
    },
    viewStyle:{
      alignItems:'center',
      justifyContent:'center',
      borderBottomWidth:1,
    }
  });

  const url = "https://jsonplaceholder.typicode.com/posts";
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, []);
  return (
    <ScrollView scrollIndicatorInsets={{ right:1 }} style={{flex:1}}>
      <View style={styles.container}>
        {loading ? (
          <ActivityIndicator style={styles.horizontal} size="large" color="#0000ff" />
          ) : (
          data.map((post, i) => (
            <View
              key={i}
              style={styles.viewStyle}>
              <Text style={styles.postText}>
                {post.text}
              </Text>
              <Text style={styles.bodyText}>{post.body}</Text>
            </View>
          ))
        )}
      </View>
      <StickyFooter />
    </ScrollView>
  );
};

export default AppAPI;
