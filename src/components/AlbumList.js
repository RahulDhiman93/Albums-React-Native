import React, { Component } from 'react';
import { View, Text } from 'react-native';

class AlbumList extends Component {

  componentWillMount() {
    console.log('it will mount in ALbumList');
  }

  render() {
  return (
    <View>
      <Text>Albums List!</Text>

    </View>
  );
}
}


export default AlbumList;
