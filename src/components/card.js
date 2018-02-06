import React from 'react';
import { View, Text } from 'react-native';
import CardHeader from './cardheader';
import CardBody from './cardbody';

const Card = (props) => {
  const { timing, subject, classroom, teacher } = props;
  const { cardStyle } = styles;
  return (
    <View style={cardStyle}>
      <CardHeader timing={timing}/>
      <CardBody subject={subject} classroom={classroom} teacher={teacher} />
    </View>
  )
};

const styles = {
 cardStyle: {
   backgroundColor: '#3498db',
   borderRadius: 4,
   marginBottom: 20,
   padding: 10
 }
};

export default Card;
