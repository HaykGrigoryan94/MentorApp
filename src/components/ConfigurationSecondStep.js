import React from 'react';
import { View } from 'react-native';
import { Input, Button } from 'react-native-elements';

const ConfigurationSecondStep = ({ navigation }) => {
  return (
    <View>
      <View>
        <Input
          placeholder='department'
        />
      </View>
      <View>
        <Input
          placeholder='job title'
        />
      </View>
      <Button
        title="Next"
        type="outline"
        onPress={() => navigation.navigate('GroupManagement')}
      />
    </View>
  )
}

export default ConfigurationSecondStep;