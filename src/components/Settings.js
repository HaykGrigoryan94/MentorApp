import { Input, Avatar, Button, Card } from 'react-native-elements';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux'
import NavBar from './NavBar'

const Settings = () => {
  return (
    <View>
      <Card>
        <Card.Title>HELLO WORLD</Card.Title>
        <Card.Divider />
        <Card.Image >
          <Text style={{ marginBottom: 10 }}>
            The idea with React Native Elements is more about component structure than actual design.
    </Text>
          <Button
            //   icon={<Icon name='code' color='#ffffff' />}
            buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
            title='VIEW NOW' />
        </Card.Image>
      </Card>
    </View>
    // <NavBar />
  )
}

export default Settings;