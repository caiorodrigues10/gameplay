import  React from 'react';

import { View, ImageBackground, Text, FlatList} from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Background } from '../../components/Background';
import { Header } from '../../components/Header';
import {Fontisto } from '@expo/vector-icons';
import { theme } from '../../global/styles/theme';
import BannerImg from '../../assets/banner.png';
import { styles } from './styles';
import { ListHeader } from '../../components/ListHeader';
import { Member } from '../../components/Members';
import { ListDivider } from '../../components/ListDivider';
import { ButtonIcon } from '../../components/ButtonIcon';


export function AppointmentCreate(){
  const member = [
    {
      id: '1',
      username: 'Caio',
      avatarUrl: 'http://github.com/caiorodrigues10.png',
      status: 'online'
    },
    {
      id: '2',
      username: 'Caio',
      avatarUrl: 'http://github.com/caiorodrigues10.png',
      status: 'offline'
    }
  ]
  return (
    <Background>
      <Header 
        title="Detalhes"
        action={
          <BorderlessButton>
            <Fontisto 
              name="share"
              size={24}
              color={theme.colors.primary}
            />
          </BorderlessButton>
        }
      />

      <ImageBackground source={BannerImg} style={styles.banner}>
        <View style={styles.bannerContent}>
          <Text style={styles.title}>
            Lendários
          </Text>
          <Text style={styles.subtitle}>
            É hoje que vamos chegar ao challenger sem perder uma partida na md10
          </Text>
        </View>
      </ImageBackground>

      <ListHeader 
        title="Jogadores"
        subtitle="Total 3"
      />

      <FlatList 
        data={member}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <Member data={item} />
        )}
        ItemSeparatorComponent={() => <ListDivider/>}
        style={styles.member}
      />
      <View style={styles.footer}>
        <ButtonIcon title="Entrar na partida"/>
      </View>

    </Background>
  )
}