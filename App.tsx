import React from 'react';
import { SafeAreaView } from 'react-native';

import StackRoutes from './src/components/Navigation/StackRoutes';
import { NavigationContainer } from '@react-navigation/native';


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
