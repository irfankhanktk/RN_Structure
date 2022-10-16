export const horizontalAnimation :any= {
    headerShown: false,
    gestureDirection: 'horizontal',
    cardStyleInterpolator: ({current, layouts}: any) => {
      return {
        cardStyle: {
          transform: [
            {
              translateX: current.progress.interpolate({
                inputRange: [0, 1],
                outputRange: [layouts.screen.width, 0],
              }),
            },
          ],
        },
      };
    },
  };