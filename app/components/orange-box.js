import React, {Component} from 'react';
import  {
  View,
  Text
} from 'react-native';

export default class OrangeBox extends Component {
  render() {
    return (
      <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'darkorange',
      }}
        >
          <Text style={{
            fontSize: 20,
            color:'white'
          }}>
            {'Orange Box'}
          </Text>
      </View>
    );
  }
}
