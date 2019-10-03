/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import InitialForm from './app/components/InitialForm';
import {slidesConfig} from './app/utils';
import React, {Component} from 'react';
import {AsyncStorage, BackHandler} from 'react-native';

import AppIntroSlider from 'react-native-app-intro-slider';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show_Main_App: false,
    };
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
  }

  handleBackButton = () => {
    //add your code

    return true;
  };

  componentWillMount() {
    AsyncStorage.getItem('show_Main_App').then(value => {
      this.setState({show_Main_App: value === '1'});
    });
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
  }

  on_Done_all_slides = () => {
    this.setState({show_Main_App: true});
    AsyncStorage.setItem('show_Main_App', '1');
  };

  on_Skip_slides = () => {
    this.setState({show_Main_App: true});
  };

  render() {
    if (this.state.show_Main_App) {
      return <InitialForm />;
    } else {
      return (
        <AppIntroSlider
          slides={slidesConfig}
          onDone={this.on_Done_all_slides}
          showSkipButton={true}
          onSkip={this.on_Skip_slides}
        />
      );
    }
  }
}
