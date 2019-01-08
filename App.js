import React from 'react';
import { createAppContainer } from 'react-navigation';
import Model1 from './src/Model1';

const AppModel1 = createAppContainer(Model1.StackNavigator);

export default class AppModel1 extends React.Component {
  render() {
    return (
      <AppModel1 />
    );
  }
}