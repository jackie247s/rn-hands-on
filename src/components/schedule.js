import React, { Component } from 'react';
import { View, ScrollView, Text } from 'react-native';
import Card from './card';
import ScheduleData from './scheduledata';

class Schedule extends Component {
  renderCards() {
    const sdata = ScheduleData.data;
    return sdata.map((data) =>
    <Card
      key={data.timing}
      timing={data.timing}
      subject={data.subject}
      classroom={data.classroom}
      teacher={data.teacher}
    />);
  }

  render() {
    const { containerStyle, scrollStyle } = styles;
    return (
      <View style={containerStyle}>
        <ScrollView style={scrollStyle} showsVerticalScrollIndicator={false}>
          {this.renderCards()}
        </ScrollView>
      </View>
    );
  }
}

const styles = {
  containerStyle: {
    flex: 1,
    marginLeft: 20,
    marginRight: 20,
  },
  scrollStyle: {
    paddingTop: 40,
    paddingBottom: 40
  }
}

export default Schedule;
