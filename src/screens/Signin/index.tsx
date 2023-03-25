import React from 'react';
import { View, Text, Image } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { styles } from './styles';

import IllustrationImg from '../../assets/illustration.png';

import { ButtonIcon } from '../../components/ButtonIcon';
import { Background } from '../../components/Background';

export function Signin(){
    const navigation = useNavigation();

    function handleSignin(){
        navigation.navigate('Home');
    }

    return (
    <Background>
        <View style={styles.container}>
            <Image 
                source={IllustrationImg}
                style={styles.image}
                resizeMode="stretch"
            />
            <View style={styles.content}>
                <Text style={styles.title}>
                    Conecte-se{`\n`}
                    e organize suas {`\n`}
                    jogatinas {`\n`}
                </Text>
                <Text style={styles.subTitle}>
                    Crie grupos para jogar seus games {`\n`}
                    favoritos com seus amigos
                </Text>
                <ButtonIcon 
                    title="Entrar com o Discord"
                    onPress={handleSignin}
                />

            </View>
        </View>
    </Background>
    );
}