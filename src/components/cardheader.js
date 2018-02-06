import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const CardHeader = (props) => {
  const { timing } = props;
  const { containerStyle, textContainerStyle, textStyle } = styles;

  return (
    <View style={containerStyle}>
      <Icon name='clock-o' size={30} color="#fff"/>
      <View style={textContainerStyle}>
        <Text style={textStyle}>
          { timing }
        </Text>
      </View>
    </View>
  );
};

const styles = {
  containerStyle: {
    borderColor: '#fff',
    borderBottomWidth: 1,
    flexDirection: 'row',
    padding: 10
  },
  textContainerStyle: {
    alignItems: 'center',
    flex: 1
  },
  textStyle: {
    color: '#fff',
    marginLeft: 15,
    fontSize: 20
  }
};

export default CardHeader;
