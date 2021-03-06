import { Input, Avatar, Button } from 'react-native-elements';
import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { useDispatch } from 'react-redux'
import CurrentLocation from './CurrentLocation'

const ConfigurationFirstStep = ({ navigation }) => {
  const [isLocation, setIsLocation] = useState(false)
  const dispatch = useDispatch()

  const userInformation = (key) => (e) => {
    dispatch({
      type: 'UPDATE_USER_INFORMATION',
      value: {
        [key]: e.target.value
      }
    })
  }

  return (
    <View>
      <View>
        <Avatar
          onPress={() => navigation.navigate('Camera')}
          avatarStyle={{ borderRadius: 50 }}
          source={{
            uri:
              'data:image/jpeg;base64,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',
          }}
          size="xlarge"
        >
          <Avatar.Accessory size={50} />
        </Avatar>
      </View>
      <View>
        <Input
          placeholder='First Name'
          onChange={userInformation('firstName')}
        />
      </View>
      <View>
        <Input
          placeholder='Last Names'
          onChange={userInformation('lastName')}
        />
        <Text>
          {isLocation ? <CurrentLocation /> : ''}
        </Text>
      </View>
      <View>
        <Button
          title="Choose Location"
          type="outline"
          onPress={() => setIsLocation(true)}
        />
      </View>
      <View>
        <Button
          title="Next"
          type="outline"
          onPress={() => navigation.navigate('Step2')}
        />
      </View>
    </View>

  )
}


export default ConfigurationFirstStep;

