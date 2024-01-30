import React, {useState} from 'react';
import {SafeAreaView, View, Text, StyleSheet, Image} from 'react-native';
import {COLORS} from '../../constant';

import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';

import {WhiteLogo} from '../../assets';

import notifee from '@notifee/react-native';
import {
  BottomDrawer,
  Button,
  PrivacyAndSecurity,
  SectorSelector,
  Title,
} from '../../components/main';

function RegisterCode(): JSX.Element {
  const onDisplayNotification = async () => {
    await notifee.requestPermission();

    const channelId = await notifee.createChannel({
      id: 'default',
      name: 'Default Channel',
    });

    // Display a notification
    await notifee
      .displayNotification({
        title: 'Notification Title',
        body: 'Main body content of the notification',
        android: {
          channelId,
          // pressAction is needed if you want the notification to open the app when pressed
          pressAction: {
            id: 'default',
          },
        },
      })
      .then(res => console.log('OK'))
      .catch(err => console.log(err));
  };

  const [open, setOpen] = useState<boolean>(true);
  const [page, setPage] = useState<number>(0);

  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({value, cellCount: 6});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.blue,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 50,
      }}>
      <Image
        source={WhiteLogo}
        style={{
          resizeMode: 'contain',
          width: 300,
          height: 100,
        }}
      />
      {page === 0 && (
        <View
          style={{
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <SectorSelector />
        </View>
      )}
      <BottomDrawer page={page} open={open}>
        <View style={styles.textContainer}>
          <Title type="medium">Hoşgeldiniz</Title>
          <Text style={styles.subText}>
            Kayıt İşlemine Devam Etmek İçin Kayıt Kodunuzu Giriniz {page}
          </Text>
        </View>
        <View
          style={{
            alignItems: 'center',
            width: '100%',
            height: '50%',
            backgroundColor: 'pink',
          }}>
          <CodeField
            value={value}
            onChangeText={setValue}
            cellCount={6}
            rootStyle={styles.codeFieldRoot}
            keyboardType="number-pad"
            textContentType="oneTimeCode"
            renderCell={({index, symbol, isFocused}) => (
              <Text
                key={index}
                style={[styles.cell, isFocused && styles.focusCell]}
                onLayout={getCellOnLayoutHandler(index)}>
                {symbol || (isFocused ? <Cursor /> : null)}
              </Text>
            )}
          />
          <Button
            onPress={() => setPage(page + 1)}
            title="Devam Et"
            type="blueBase"
          />
        </View>
        <PrivacyAndSecurity />
      </BottomDrawer>
    </SafeAreaView>
  );
}

export default RegisterCode;

const styles = StyleSheet.create({
  textContainer: {
    width: '100%',
    marginVertical: '6%',
    backgroundColor: 'pink',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 24,
  },
  subText: {
    color: COLORS.black,
    fontSize: 14,
    textAlign: 'center',
    fontFamily: 'Montserrat-Bold',
    width: '70%',
  },
  codeFieldRoot: {
    marginVertical: '10%',
  },
  cell: {
    width: 44,
    height: 44,
    borderRadius: 8,
    marginHorizontal: 4,
    fontSize: 16,
    borderWidth: 2,
    borderColor: COLORS.black,
    color: COLORS.black,
    fontFamily: 'Montserrat-Bold',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  focusCell: {
    borderColor: COLORS.black,
  },
});
