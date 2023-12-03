import React, {useState} from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import {COLORS} from '../../constant';
import notifee from '@notifee/react-native';
import {
  BottomDrawer,
  Button,
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

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.blue,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 50,
      }}>
      <Button
        onPress={() => onDisplayNotification()}
        title="Devam Et"
        type="whiteBase"
      />
      <View
        style={{width: '100%', justifyContent: 'center', alignItems: 'center'}}>
        <SectorSelector />
      </View>
      <BottomDrawer open={open}>
        <Title type="medium">Hoşgeldiniz</Title>
        <Button
          onPress={() => onDisplayNotification()}
          title="Devam Et"
          type="blueBase"
        />
      </BottomDrawer>
    </SafeAreaView>
  );
}

export default RegisterCode;
