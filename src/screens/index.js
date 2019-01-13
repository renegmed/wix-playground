import { Navigation } from 'react-native-navigation';

export function registerScreens() {
    Navigation.registerComponent('navigation.playground.WelcomeScreen', () => require('./WelcomeScreen').default); 
    Navigation.registerComponent('navigation.playground.OptionsScreen', () => require('./OptionsScreen').default);    
    Navigation.registerComponent('navigation.playground.ScrollViewScreen', () => require('./ScrollViewScreen').default);
    Navigation.registerComponent('navigation.playground.CustomTransitionOrigin', () => require('./CustomTransitionOrigin').default); 
    Navigation.registerComponent('navigation.playground.CustomTransitionDestination', () => require('./CustomTransitionDestination').default); 
    Navigation.registerComponent('navigation.playground.CustomDialog', () => require('./CustomDialog').default); 
    Navigation.registerComponent('navigation.playground.PushedScreen', () => require('./PushedScreen').default);
    Navigation.registerComponent('navigation.playground.CustomTopBar', () => require('./CustomTopBar').default); 
    Navigation.registerComponent('navigation.playground.CustomRoundedButton', () => require('./CustomRoundedButton').default); 
    Navigation.registerComponent('navigation.playground.TopBarBackground', () => require('./TopBarBackground').default); 
    Navigation.registerComponent('navigation.playground.TextScreen', () => require('./TextScreen').default);
}    
 