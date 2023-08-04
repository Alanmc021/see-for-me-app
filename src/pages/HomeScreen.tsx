import React from 'react';
import {View, Text} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import {MyButton} from '../components/MyButton';
import {styles} from './styles';
import ReduxTeste from '../components/reduxTeste';

export function HomeScreen() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Essa tela só pode ser vista por usuários autenticados
      </Text>
      <ReduxTeste/>
      <MyButton
        title="Ir para Configurações"
        onPress={() => navigation.navigate('Settings')}
      />
      <Text>
        by <Text style={styles.coffText}>Coffstack</Text>
      </Text>
    </View>
  );
}
