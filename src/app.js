import { Navigation } from 'react-native-navigation';
import { registerScreens } from './screens';
 
export function start() {

  registerScreens();
  
  Navigation.events().registerAppLaunchedListener(async () => { 

    Navigation.setRoot({
      root: {
        stack: {
          id: 'TEST',
          children: [
            {
              component: {
                name: 'navigation.playground.WelcomeScreen' 
              }
            }
          ]
        }
      }
    });
  });
}
 