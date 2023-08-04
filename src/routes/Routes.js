import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { SplasScreen } from '../pages/SplashScreen';

import { AppStack } from './AppStack';
import { AuthStack } from './AuthStack';
import { useAuth } from '../contexts/Auth';

export function Router() {
  const { authData, isLoading } = useAuth();
  const [splash, setSplash] = useState(isLoading)
  useEffect(() => {
    setTimeout(() => {       
          setSplash(false)        
    }, 2000);
  }, [])
  if (splash) {
    return <SplasScreen />
  }
  return (
    <NavigationContainer>
      {authData ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
}
