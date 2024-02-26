import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {COLORS} from '../../constant';
import {Header, ButtonGroup} from '../../components/main/header';
import {Button, Card} from '../../components/main';
import {getWidth} from '../../utils/getDimensions';

const Home = () => {
  return (
    <View style={styles.container}>
      <Header pageTitle="Anasayfa">
        <ButtonGroup />
      </Header>
      <ScrollView
        contentContainerStyle={styles.contentContainer}
        style={styles.scrollContainer}>
        <Card theme="grayBase">
          <Text style={{color: COLORS.black, fontFamily: 'Montserrat-Bold'}}>
            Yaklaşan Servisler
          </Text>
        </Card>
        <Card theme="blueBase">
          <Text style={{color: COLORS.white, fontFamily: 'Montserrat-Bold'}}>
            Öğrencilerim
          </Text>
          <View style={{alignItems: 'center'}}>
            <Button
              disabled
              title="Detay"
              colorBase="whiteBase"
              type="secondary"
            />
          </View>
        </Card>
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  scrollContainer: {},
  contentContainer: {
    width: getWidth(0.9),
    alignSelf: 'center',
    gap: getWidth(0.05),
    paddingVertical: getWidth(0.05),
  },
});
