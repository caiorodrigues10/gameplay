import React, { useState } from "react";

import { View, FlatList, Text } from "react-native";
import { styles } from "./styles";
import { Profile } from "../../components/Profile";
import { ListHeader } from "../../components/ListHeader";
import { ButtonAdd } from "../../components/ButtonAdd";
import { CategorySelect } from "../../components/CategorySelect";
import { Appointment } from "../../components/Appointments";
import { ListDivider } from "../../components/ListDivider";
import { Background } from '../../components/Background';
import { useNavigation } from "@react-navigation/native";


export function Home(){
    const [ category, setCategory ] = useState('');
    
    const  navigation  = useNavigation();

    const appointments = [
        {
            id: '1',
            guild: {
                id: '1',
                name: 'Lendários',
                icon: null,
                owner: true
            },
            category: '1',
            date:'22/06 às 20:40h',
            description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10'
        },
        {
            id: '2',
            guild: {
                id: '2',
                name: 'Lendários',
                icon: null,
                owner: true
            },
            category: '2',
            date:'22/06 às 20:40h',
            description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10'
        }
    ]

    function handleCategorySelect(categoryId : string){
        categoryId === category ? setCategory('') : setCategory(categoryId);
    }

    function handleAppointmentsDetails(){
        navigation.navigate('AppointmentDetails');
    }

    return(
        <Background>
            <View style={styles.header}>


                <Profile/>
                <ButtonAdd/>
            </View>
        
            <View>
                <CategorySelect
                    categorySelected={category}
                    setCategory={handleCategorySelect}
                />
            </View>

            <View style={styles.content}>
                 <ListHeader 
                    title="Partidas agendadas"
                    subtitle="Total 6"
                 />

                 <FlatList 
                    data={appointments}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                        <Appointment 
                            data={item}
                            onPress={handleAppointmentsDetails}
                        />
                    )}
                    ItemSeparatorComponent={() => <ListDivider />}
                    style={styles.matches}
                    showsVerticalScrollIndicator={false}
                 />
            </View>
        </Background>
    );
}