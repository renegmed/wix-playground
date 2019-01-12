import { Navigation } from 'react-native-navigation';

export function registerScreens() {
    Navigation.registerComponent('navigation.playground.WelcomeScreen', () => require('./WelcomeScreen').default); 
    Navigation.registerComponent('navigation.playground.BackHandlerScreen', () => require('./BackHandlerScreen').default); 
    Navigation.registerComponent('navigation.playground.BackHandlerModalScreen', () => require('./BackHandlerModalScreen').default);
}    
 