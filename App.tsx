import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider as PaperProvider } from 'react-native-paper';
import { Provider } from 'react-redux';
import { store } from './src/modules/store';
import StoreRegistration from './src/pages/admin/StoreRegistration';
import SlectPage from './src/pages/SlectPage';
import TimePage from './src/pages/Time';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <Provider store={store}>
      <PaperProvider>
        <NavigationContainer>
          <Stack.Navigator
          initialRouteName="StoreRegistration"
            screenOptions={{
              headerTitleStyle: {
                fontSize: 40,
                fontWeight: 'bold',
              },
            }}
          >
            <Stack.Screen name="店舗管理" component={StoreRegistration} />
            <Stack.Screen name="SlectPage" component={SlectPage} options={{ headerShown: false }} />
            <Stack.Screen name="TimePage" component={TimePage} />
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </Provider>
  );
}

export default App;
