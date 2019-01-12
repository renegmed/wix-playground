import { Navigation } from 'react-native-navigation';

export function registerScreens() {
    Navigation.registerComponent('navigation.playground.WelcomeScreen', () => require('./WelcomeScreen').default); 
    Navigation.registerComponent('navigation.playground.TopTabOptionsScreen', () => require('./TopTabOptionsScreen').default); 
    Navigation.registerComponent('navigation.playground.TopTabScreen', () => require('./TopTabScreen').default);
}    
 