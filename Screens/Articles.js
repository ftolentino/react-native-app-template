import React from 'react';
import { View, ScrollView } from 'react-native';
import AppAPI from '../api/AppAPI';

const BrowseArticles = () => {
  return (
    <ScrollView scrollIndicatorInsets={{ right: 1 }}>
      <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
        <AppAPI />
      </View>
    </ScrollView>
  );
}

export default BrowseArticles