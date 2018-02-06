import React from 'react';
import { View, Text } from 'react-native';

const Header = (props) => {
  const { containerStyle, textStyle } = styles;

  return (
    <View style={containerStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};

const styles = {
  containerStyle: {
    alignItems: 'center',
    backgroundColor: '#3498db',
    justifyContent: 'center',
    height: 60
  },
  textStyle: {
    color: '#fff',
    fontSize: 20
  }
};

export default Header;
