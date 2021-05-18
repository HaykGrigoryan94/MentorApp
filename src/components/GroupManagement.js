import React from 'react';
import { View, ScrollView } from 'react-native';
import { Button, ListItem } from 'react-native-elements';
import { useDispatch } from 'react-redux';
import data from '../data.json'

const GroupManagement = ({ navigation }) => {
  const arr = [];
  const dispatch = useDispatch();

  const chooseEmployees = (element) => {
    if (arr.length > 4) {
      return
    }
    arr.push(element)
    dispatch({
      type: 'UPDATE_USER_INFORMATION',
      value: {
        employees: [...arr]
      }
    })
  }

  return (
    <View>
      <ScrollView>{
        data.map((el, index) => {
          return (
            <ListItem key={index} onPress={(e) => chooseEmployees(e, el)} style={{ backgroundColor: 'red' }}>
              <ListItem.Content >
                <ListItem.Title>{el.first_name + "/" + el.last_name}</ListItem.Title>
                <ListItem.Subtitle>{el.gender}</ListItem.Subtitle>
                <ListItem.Subtitle>{el.department + "/" + el.job_title}</ListItem.Subtitle>
                <ListItem.Subtitle>{el.country + "/" + el.city}</ListItem.Subtitle>
                <ListItem.Subtitle>{el.email}</ListItem.Subtitle>
              </ListItem.Content>
            </ListItem>
          )
        })}
        <Button
          title="Done"
          type="outline"
          onPress={() => navigation.navigate('Home')}
        />
      </ScrollView>
    </View>
  )
}

export default GroupManagement;