import {StyleSheet, Text, SafeAreaView, View, Image} from 'react-native';
import React, {useRef, useState} from 'react';
import {COLORS} from '../../constant';

import {WhiteLogo} from '../../assets';
import Button from './Button';
import Onboarding from 'react-native-onboarding-swiper';
import {OnboardingData} from '../../constant/data';
import {getHeight, getWidth} from '../../utils/getDimensions';

const OnboardingSwiper = () => {
  const onboardingRef = useRef<Onboarding>(null);
  const [pageIndex, setPageIndex] = useState(0);

  console.log('pageIndex', pageIndex);
  return (
    <SafeAreaView style={styles.container}>
      <Image source={WhiteLogo} style={{width: '70%', height: '8%'}} />
      <Onboarding
        ref={onboardingRef}
        containerStyles={{
          backgroundColor: 'pink',
          justifyContent: 'center',
          alignItems: 'center',
          height: getHeight(0.5),
        }}
        titleStyles={{
          backgroundColor: 'orange',
        }}
        subTitleStyles={{
          backgroundColor: 'yellow',
        }}
        imageContainerStyles={{
          backgroundColor: 'green',
        }}
        pageIndexCallback={index => setPageIndex(index)}
        showNext={false}
        showDone={false}
        showSkip={false}
        onDone={() => console.log('done')}
        controlStatusBar={false}
        pages={[
          {
            backgroundColor: '#fff',
            image: (
              <Image
                width={100}
                height={100}
                source={{
                  uri: 'https://cdn.routewise.tech/images/onboarding/location.png',
                }}
              />
            ),
            title: 'Onboarding',
            subtitle: 'Done with React Native Onboarding Swiper',
          },
          {
            backgroundColor: '#fff',
            image: (
              <Image
                style={{backgroundColor: 'pink'}}
                width={100}
                height={100}
                source={{
                  uri: 'https://cdn.routewise.tech/images/onboarding/location.png',
                }}
              />
            ),
            title: 'Onboarding',
            subtitle: 'Done with React Native Onboarding Swiper',
          },
        ]}
      />
      <Button
        title="Devam Et"
        type="whiteBase"
        disabled={pageIndex === 1 ? true : false}
        onPress={() => {
          onboardingRef.current?.goNext();
        }}
      />
    </SafeAreaView>
  );
};

export default OnboardingSwiper;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.blue,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 40,
  },
});
