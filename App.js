import React, { useEffect } from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet
} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import Global from './src/Global';
import MainNavigation from './src/Navigation';
import { Provider } from "react-redux";
import axios from "axios";
import { store } from "./src/redux/index";

axios.defaults.baseURL = "http://localhost:4000/api";

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'transparent',
  },
};

const App = () => {

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <>
      <Provider store={store}>
          <StatusBar barStyle='dark-content' backgroundColor='#fff' />
          <SafeAreaView style={{ flex: 1, backgroundColor: Global.white }}>
            <NavigationContainer theme={MyTheme}>
              <MainNavigation />
            </NavigationContainer>
          </SafeAreaView>
      </Provider>
    </>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;