import { Input, Avatar, Button } from 'react-native-elements';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


const ConfigurationFirstStep = (props) => {
    return (
        <View>
            <View>
                <Avatar
                    rounded
                    source={{
                        uri:
                            'https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg',
                    }}
                    size={"xlarge"}
                />
            </View>
            <View>
                <Input
                    placeholder='First Name'
                />
            </View>
            <View>
                <Input
                    placeholder='Last Names'
                />
            </View>
            <View>
                <Button
                    title="Choose Location"
                    type="outline"
                />
            </View>
            <View>
                <Button
                    title="Next"
                    type="outline"
                />
            </View>
        </View>

    )
}

export default ConfigurationFirstStep;