import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

import styles from './NotificationCard.styles';

interface NotificationDataProps {
  id: number;
  content: string;
  isRead: boolean;
}

interface NotificationCardProps {
  data: NotificationDataProps;
}

const NotificationCard = ({data}: NotificationCardProps) => {
  return (
    <TouchableOpacity activeOpacity={0.6} style={styles.container}>
      <Text style={styles.notificationText(data.isRead)}>{data.content}</Text>
    </TouchableOpacity>
  );
};

export default NotificationCard;
