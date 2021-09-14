import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';

import {SliderArray} from './SliderArray';
import AppIntroSlider from 'react-native-app-intro-slider';
import {renderItem} from './renderItem';
import {RenderButton} from './ButtonCircle';

const SliderIntroduccion = () => {
  const [showRealApp, setShowRealApp] = useState(false);

  const onDone = () => setShowRealApp(true);

  const {renderNextButton, renderDoneButton} = RenderButton();

  return showRealApp ? (
    <SliderIntroduccion />
  ) : (
    <AppIntroSlider
      renderItem={renderItem}
      data={SliderArray}
      onDone={onDone}
      renderDoneButton={renderDoneButton}
      renderNextButton={renderNextButton}
    />
  );
};

export default SliderIntroduccion;
