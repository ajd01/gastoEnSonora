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

import AppIntroSlider from 'react-native-app-intro-slider';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show_Main_App: true,
    };
  }

  on_Done_all_slides = () => {
    this.setState({show_Main_App: true});
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
