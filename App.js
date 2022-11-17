import React from 'react';
import { AppRegistry } from 'react-native';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { View, StyleSheet } from 'react-native';
import DrawerNavigator from './navigation/DrawerNavigator';

// Initialize Apollo Client
const client = new ApolloClient({
  uri: 'https://standardofcareexpo.viewmynew.com/graphql',
  cache: new InMemoryCache()
});

export default function App() {
  return (
    <ApolloProvider client={client}>
      <View style={styles.container}>
        <DrawerNavigator />
      </View>
    </ApolloProvider>
  );
}

AppRegistry.registerComponent('StandardOfCare', () => App);

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});