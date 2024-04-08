import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { StyleSheet, Text } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import { RestaurantsContextProvider } from './src/services/restaurant/restaurant-context';
import { LocationContextProvider } from './src/services/location/location-context';
import { FavouritesContextProvider } from './src/services/favourites/favourites.context';
import { theme } from './src/infrastructure/theme';

import {
  useFonts as useOswald,
  Oswald_400Regular,
} from '@expo-google-fonts/oswald';
import { useFonts as useLato, Lato_400Regular } from '@expo-google-fonts/lato';
import { Navigation } from './src/infrastructure/navigation';
import { AuthenticationContextProvider } from './src/services/athentication/athentication.context';

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthenticationContextProvider>
          <FavouritesContextProvider>
            <LocationContextProvider>
              <RestaurantsContextProvider>
                <Navigation />
              </RestaurantsContextProvider>
            </LocationContextProvider>
          </FavouritesContextProvider>
        </AuthenticationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style='auto' />
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
