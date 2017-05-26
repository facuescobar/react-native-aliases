import React, {Component} from 'react';
import  {
  View,
} from 'react-native';

import BlueBox from 'components/blue-box';
import OrangeBox from 'components/orange-box';
import GreenBox from 'utils/green-box';

export default class App extends Component {
  render() {
    return (
      <View style={{
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'darkcyan',
      }}>
        <BlueBox/>
        <OrangeBox/>
        <GreenBox/>
      </View>
    );
  }
}
