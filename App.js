import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import GroupsScreen from './screens/GroupsScreen';
import GroupScreen from './screens/GroupScreen';
import { store } from './store';
import { Provider } from 'react-redux';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Группы" component={GroupsScreen} />    
        <Stack.Screen name="Группа" component={GroupScreen} />    
      </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
