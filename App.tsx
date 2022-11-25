import messaging from '@react-native-firebase/messaging';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { linking } from 'navigation/linking';
import { navigationRef } from 'navigation/navigation-ref';
import { RootNavigator } from 'navigation/root-navigation';
import React, { useEffect, useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { store } from 'store';
import 'translation';
const App = () => {
  const [loading, setLoading] = useState(true);
  const [initialRoute, setInitialRoute] = useState<string|undefined>('Splash');

  useEffect(() => {
    // Assume a message-notification contains a "type" property in the data payload of the screen to open
    messaging().onNotificationOpenedApp(remoteMessage=> {
      console.log(
        'Notification caused app to open from background state:',
        remoteMessage.notification,
      );
        // navigation.navigate(remoteMessage?.data?.type);
    });

    // Check whether an initial notification is available
    messaging()
      .getInitialNotification()
      .then(remoteMessage => {
        if (remoteMessage) {
          console.log(
            'Notification caused app to open from quit state:',
            remoteMessage.notification,
          );
          // setInitialRoute(remoteMessage?.data?.type); // e.g. "Settings"
        }
        setLoading(false);
      });
  }, []);

  if (loading) {
    return null;
  }
// async function buildLink() {
//   const link = await dynamicLinks().buildLink({
//     link: 'https://invertase.io',
//     // domainUriPrefix is created in your Firebase console
//     domainUriPrefix: 'https://xyz.page.link',
//     // optional setup which updates Firebase analytics campaign
//     // "banner". This also needs setting up before hand
//     analytics: {
//       campaign: 'banner',
//     },
//   });

//   return link;
// }


// const handleDynamicLink = (link:any) => {
//   // Handle dynamic link inside your own application
//   console.log('link.url:::::',link?.url);
  
//   if (link.url === 'https://rnwitbit.page.link/test') {
//     // ...navigate to your offers screen
//     Alert.alert('offer')
//   }
// };
// When the app is in the foreground state (visible on the device), you can use the onLink method to subscribe to events as and when they happen:
// React.useEffect(() => {
//   const unsubscribe = dynamicLinks().onLink(handleDynamicLink);
//   // When the component is unmounted, remove the listener
//   return () => unsubscribe();
// }, []);
//If the application is in a background state or has fully quit then the getInitialLink method can be used to detect whether the application was opened via a link:
// React.useEffect(() => {
//   dynamicLinks()
//     .getInitialLink()
//     .then((link:any) => {
//       console.log('link;=>',link);
//       Alert.alert('offer')
//       if (link?.url === 'https://rnwitbit.page.link/test') {
//         // ...set initial route as offers screen

//       }
//     });
// }, []);

  return (
    <SafeAreaProvider style={{flex: 1}}>
    <Provider store={store}>
      <NavigationContainer ref={navigationRef} linking={linking}>
      <RootNavigator />
      </NavigationContainer>
    </Provider>
    </SafeAreaProvider>
  );
};
export default App;
