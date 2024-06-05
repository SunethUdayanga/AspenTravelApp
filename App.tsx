import React from 'react';
import { SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import StackRoutes from './src/routes/StackRoutes';

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <SafeAreaView style={{ flex: 1 }}>
        <StackRoutes />
      </SafeAreaView>
    </NavigationContainer>
  );
}

export default App;
