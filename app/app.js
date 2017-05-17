import React, {Component} from 'react';
import  {
  View,
} from 'react-native';

//Uncomment out line 8 and 9 to try direct import
// import BlueBox from './components/blue-box';
// import OrangeBox from './components/orange-box';

//Comment out line 11 and 12 to try babel-plugin-module-resolver import
import BlueBox from 'comp/blue-box';
import OrangeBox from 'comp/orange-box';

export default class App extends Component {
  render() {
    return (
      <View style={{
        backgroundColor: 'darkcyan',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <BlueBox/>
        <OrangeBox/>
      </View>
    );
  }
}
