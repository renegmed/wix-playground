import { Navigation } from 'react-native-navigation';

export function registerScreens() {
 
    Navigation.registerComponent('navigation.playground.WelcomeScreen', () => require('./WelcomeScreen').default);
    Navigation.registerComponent(`navigation.playground.TextScreen`, () => require('./TextScreen').default); 
    Navigation.registerComponent(`navigation.playground.PushedScreen`, () => require('./PushedScreen').default);  
    Navigation.registerComponent('navigation.playground.SideMenuScreen', () => require('./SideMenuScreen').default); 
  
    Navigation.registerComponent('navigation.playground.SideMenuScreen', () => require('./SideMenuScreen').default); 
    Navigation.registerComponent('navigation.playground.TextScreen', () => require('./TextScreen').default);
  
    Navigation.registerComponent('navigation.playground.LifecycleScreen', () => require('./LifecycleScreen').default); 
    
    Navigation.registerComponent('navigation.playground.StaticLifecycleOverlay', () => require('./StaticLifecycleOverlay').default);
 
}    
 