import React, { useState, useEffect } from 'react';
import { ActivityIndicator,StyleSheet, Text, View } from 'react-native';
import auth from '@react-native-firebase/auth';
import dynamicLinks from '@react-native-firebase/dynamic-links';
import  AsyncStorage  from '@react-native-async-storage/async-storage';
import { colors } from '../../config/colors';
import Headers from 'components/atoms/headers';

const EmailLinkHandler = () => {
  const { loading, error } = useEmailLinkEffect();
  console.log(loading, error);
  
  // Show an overlay with a loading indicator while the email link is processed
  if (loading || error) {
     return (
      <View style={styles.container}>
        {Boolean(error) && <Text>{error?.message}</Text>}
        {loading && <ActivityIndicator size={'small'} color={colors.black} />}
      </View>
    );
  }

  // Hide otherwise. Or show some content if you are using this as a separate screen
  return null;
};

const useEmailLinkEffect = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    const handleDynamicLink = async (link:any) => {
      // Check and handle if the link is a email login link
      if (auth().isSignInWithEmailLink(link.url)) {
        setLoading(true);

        try {
          // use the email we saved earlier
          const email = await AsyncStorage.getItem('emailForSignIn');
          if(email)
          await auth().signInWithEmailLink(email, link.url);

          /* You can now navigate to your initial authenticated screen
            You can also parse the `link.url` and use the `continueurl` param to go to another screen
            The `continueurl` would be the `url` passed to the action code settings */
        }
        catch (e) {
          setError(e);
        }
        finally {
          setLoading(false);
        }
      }
    };

    const unsubscribe = dynamicLinks().onLink(handleDynamicLink);

     /* When the app is not running and is launched by a magic link the `onLink`
        method won't fire, we can handle the app being launched by a magic link like this */
    dynamicLinks().getInitialLink()
      .then(link => link && handleDynamicLink(link));

    // When the component is unmounted, remove the listener
    return () => unsubscribe();
  }, []);

  return { error, loading };
};

const styles = StyleSheet.create({
  container: {
    // position: 'absolute',
    // left: 0,
    // right: 0,
    // top: 0,
    // bottom: 0,
    // backgroundColor: 'rgba(250,250,250,0.33)',
    // justifyContent: 'center',
    // alignItems: 'center',
    flex:1,
  },
});

const MagicLinkSplash = () => (
  <View style={{flex:1,backgroundColor:'red'}}>
   
    <EmailLinkHandler />
    {/* <AppScreens /> */}
  </View>
);
export default MagicLinkSplash