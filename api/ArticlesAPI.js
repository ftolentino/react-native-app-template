// import React from 'react'
// import { View, Text, FlatList, StyleSheet, ActivityIndicator, Pressable } from 'react-native'
// import { gql, useQuery } from '@apollo/client'

// const POSTS_QUERY = gql`
//   query Posts($after: String!) {
//   posts(after: $after) {
//     nodes {
//       id
//       title
//       uri
//     }
//   }
// }
// `

// const ArticleItem = ({ node, onPress }) => {
//   const { id, title } = node
//   let header, subheader

//   if (id) {
//     header = `id ${id}`
//     subheader = title
//   } else {
//     header = title
//   }
  
//   return (
//     <Pressable style={styles.item} onPress={onPress}>
//       <View>
//         {
//           data.posts.nodes.map((node, i) => (
//             <View
//               key={i}
//               style={{ alignItems: "center", justifyContent: "center", borderBottomWidth: 1 }}
//             >
//               <Text style={{ fontSize: 30, fontWeight: "bold" }}>
//                 {node.title}
//               </Text>
//               <Text style={{ fontSize: 20, color: "black" }}>{node.uri}</Text>
//             </View>
//           ))
//         }
//       </View>
//     </Pressable>
//   )
// }

// const ArticlesAPI = ({ after, navigation }) => {
//   const { loading, error, data } = useQuery(POSTS_QUERY, {
//     variables: { after },
//   });
//   if (loading) {
//     return (
//       <ActivityIndicator style={styles.horizontal} size="large" color="#0000ff" />
//     );
//   }
//   if (error) {
//     return (
//       <View>
//         <Text>{error}</Text>
//       </View>
//     )
//   }
//   if (data) {
//     return (
//       <FlatList
//       data={data.posts.nodes}
//       renderItem={({ item }) => (
//         <ArticleItem
//           node={item}
//           onPress={() => navigation.navigate('Article', { node: item })}
//         />
//       )}
//       keyExtractor={(node) => node.id.toString()}
//     />
//     );
//   }

// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//     paddingLeft: 10,
//     paddingRight: 10
//   },
//   horizontal:{
//     paddingTop:150,
//     flexDirection:"row",
//     justifyContent:"space-around",
//     backgroundColor:'#fff'
//   },
//   centered: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   item: {
//     paddingTop: 16,
//     paddingBottom: 16,
//     paddingLeft: 20,
//     paddingRight: 20,
//     borderBottomWidth: 1,
//     borderBottomColor: '#cccccc',
//   },
//   header: {
//     fontWeight: 'bold',
//   },
//   subheader: {
//     paddingTop: 10,
//   },
// });

// export default ArticlesAPI;