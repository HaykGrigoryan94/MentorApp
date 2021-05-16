import { Header } from 'react-native-elements';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const NavBar=()=>{
  return(
  <View>
    <Header
  leftComponent={{ icon: 'menu', color: '#fff' }}
  centerComponent={{ text: 'MentorcliQ', style: { color: '#fff' } }}
/>
  </View>
  )
}

export default NavBar;