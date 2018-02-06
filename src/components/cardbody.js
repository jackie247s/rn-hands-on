import React from 'react';
import { View, Text } from 'react-native';

const CardBody = (props) => {
  const { subject, classroom, teacher } = props;
  const { containerStyle, topStyle, bottomStyle, subjectStyle, teacherStyle, classroomStyle } = styles;
  return (
    <View style={containerStyle}>
      <View style={topStyle}>
        <Text style={subjectStyle}>{subject}</Text>
      </View>
      <View style={bottomStyle}>
        <Text style={teacherStyle}>{teacher}</Text>
        <Text style={classroomStyle}>{classroom}</Text>
      </View>
    </View>
  );
};

const styles = {
  containerStyle: {
    paddingTop: 20,
    paddingBottom: 15
  },
  topStyle: {
    alignItems: 'center',
    borderColor: '#fff',
    borderBottomWidth: 1,
    paddingBottom: 20
  },
  bottomStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    marginLeft: 40,
    marginRight: 40
  },
  subjectStyle: {
    color: '#fff',
    fontSize: 20
  },
  teacherStyle: {
    color: '#fff',
    fontSize: 18
  },
  classroomStyle: {
    color: '#fff',
    fontSize: 18
  }
};

export default CardBody;
