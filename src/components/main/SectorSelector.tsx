import React, {useState, useRef, useEffect} from 'react';
import {
  TouchableOpacity,
  Text,
  Animated,
  View,
  Dimensions,
  Easing,
  TextStyle,
} from 'react-native';
import {COLORS} from '../../constant';

const SectorSelector = () => {
  const sectors = ['Okul', 'Şirket'];
  const [selectedSector, setSelectedSector] = useState<string>('Okul');

  const animatedValue = useRef(new Animated.Value(-36)).current;
  const colorValues = useRef(
    sectors.map((_, index) => new Animated.Value(index === 0 ? 1 : 0)),
  ).current;

  const toggleSector = () => {
    Animated.timing(animatedValue, {
      toValue: selectedSector === sectors[0] ? -36 : 86,
      duration: 500,
      easing: Easing.inOut(Easing.cubic),
      useNativeDriver: true,
    }).start();

    colorValues.forEach((colorValue, index) => {
      const duration = 500;
      const delay = index === 1 ? 0 : 50; // İkinci renk geçişi için 500ms bekleme süresi

      Animated.sequence([
        Animated.delay(delay),
        Animated.timing(colorValue, {
          toValue: selectedSector === sectors[index] ? 1 : 0,
          duration,
          easing: Easing.inOut(Easing.cubic),
          useNativeDriver: false,
        }),
      ]).start();
    });
  };

  const textColors = colorValues.map((colorValue, index) => {
    return colorValue.interpolate({
      inputRange: [0, 1],
      outputRange: [COLORS.blue, COLORS.white],
    });
  });

  useEffect(() => {
    toggleSector();
  }, [selectedSector]);

  return (
    <TouchableOpacity
      activeOpacity={1}
      style={{
        backgroundColor: COLORS.white,
        width: '60%',
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderRadius: 10,
        shadowColor: '#000000',
        shadowOffset: {
          width: 8,
          height: 8,
        },
        shadowOpacity: 1,
        shadowRadius: 1,
        elevation: 20,
      }}
      onPress={() => {
        setSelectedSector(
          selectedSector === sectors[0] ? sectors[1] : sectors[0],
        );
      }}>
      <Animated.View
        style={{
          position: 'absolute',
          width: '46%',
          height: '86%',
          backgroundColor: COLORS.blue,
          borderRadius: 6,
          shadowColor: '#000000',
          transform: [
            {
              translateX: animatedValue,
            },
          ],
          shadowOffset: {
            width: 8,
            height: 8,
          },
          shadowOpacity: 1,
          shadowRadius: 1,
          elevation: 10,
        }}
      />
      {sectors.map((sector, index) => (
        <Animated.Text
          style={{
            textAlign: 'center',
            textAlignVertical: 'center',
            fontFamily: 'Montserrat-ExtraBold',
            color: sector === selectedSector ? textColors[index] : COLORS.blue,
          }}
          key={index}>
          {sector}
        </Animated.Text>
      ))}
    </TouchableOpacity>
  );
};

export default SectorSelector;
