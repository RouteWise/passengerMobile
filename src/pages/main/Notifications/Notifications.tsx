import React from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';

import styles from './Notification.styles';
import {Header, MarkAsReadButton} from '../../../components/main/header';
import NotificationCard from '../../../components/main/notifications/NotificationCard';

const Notifications = () => {
  const notificationData = [
    {
      id: 1,
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget aliquam ultricies, nunc nisl ultricies nunc, quis aliquet nisl nisl eu nisl. ',
      isRead: true,
    },
    {
      id: 2,
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget aliquam ultricies, nunc nisl ultricies nunc, quis aliquet nisl nisl eu nisl. ',
      isRead: false,
    },
  ];
  return (
    <View style={styles.container}>
      <Header pageTitle="Bildirimler" showTitle showArrow>
        <MarkAsReadButton />
      </Header>
      <View style={styles.contentContainer}>
        <FlatList
          contentContainerStyle={styles.listContentContainer}
          data={notificationData}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => <NotificationCard data={item} />}
        />
      </View>
    </View>
  );
};

export default Notifications;
