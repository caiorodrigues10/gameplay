import React from 'react';

import { styles } from './styles';
import { theme } from '../../global/styles/theme';
import { Image } from 'react-native';

export function GuildIcon(){
    const uri = 'https://s2.glbimg.com/sXsPFRk4Vmct2ALKnCa1t_YePqg=/0x0:1514x917/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2020/h/w/Abq4oBSySsO0xmGnkDlg/discord.jpg'

    return(
        <Image
            source={{ uri }}
            style={styles.image}
            resizeMode="cover"
        />
    )
}