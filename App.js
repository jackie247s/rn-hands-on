import React from 'react';
import { View } from 'react-native';
import Header from './src/components/header';
import Schedule from './src/components/schedule';

const App = () => {
  return (
    <View style={{ flex: 1}}>
      <Header headerText="FAST-NU Timetable Notifier" />
      <Schedule />
    </View>
  );
};

export default App;
