import React from 'react';

import { styles } from './styles';
import { theme } from '../../global/styles/theme';
import { View, Text } from 'react-native';
import { Avatar } from '../Avatar';

export type MemeberProps = {
  id: string;
  username: string;
  avatarUrl: string;
  status: string;
}

type Props = {
  data: MemeberProps;
}

export function Member({ data } : Props){
  const isOnline = data.status === 'online';
  const {primary, on} = theme.colors; 
  return(
      <View style={styles.container}>
          <Avatar urlImage={data.avatarUrl} />
          <View>
            <Text style={styles.title}>
              {data.username}
            </Text>
            <View style={styles.status}>
              <View style={[
                styles.bulletStatus,
                {
                  backgroundColor: isOnline ? on : primary
                }
              ]} />
              <Text style={styles.nameStatus}>
                {isOnline ? 'Disponível' : 'Ocupado'}
              </Text>
            </View>
          </View>
      </View>
    )
}