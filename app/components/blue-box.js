import React, {Component} from 'react';
import  {
  View,
  Text
} from 'react-native';

export default class BlueBox extends Component {
  render() {
    return (
      <View style={{
        backgroundColor: 'darkblue',
      }}
        >
          <Text style={{
            fontSize: 20,
            color:'white'
          }}>
            {'Blue Box'}
          </Text>
      </View>
    );
  }
}
