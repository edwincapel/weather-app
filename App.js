import React from 'react'
import { 
  StyleSheet,
  Text,
  KeyboardAvoidingView,
  Platform,
  ImageBackground,
  View
} from 'react-native'

import getImageForWeather from './utils/getImageForWeather'

import SearchInput from './components/SearchInput'

export default class App extends React.Component {
  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <ImageBackground
          source={getImageForWeather('Clear')}
          style={styles.imageContainer}
          imageStyle={styles.image}
        >
          <View style={styles.detailsContainer}>
            <Text style={[styles.largeText, styles.textStyle, styles.blue]}>San Francisco</Text>
            <Text style={[styles.smallText, styles.textStyle]}>Light Cloud</Text>
            <Text style={[styles.largeText, styles.textStyle]}>24°</Text>

            <SearchInput placeholder="Search any city"/>
          </View>
        </ImageBackground>
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#34495E'
  },
  imageContainer:{
    flex: 1
  },
  image:{
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover'
  },
  blue: {
    color: 'blue'
  },
  textStyle: {
    textAlign: 'center',
    fontFamily: Platform.OS == 'ios' ? 'AvenirNext-Regular' : 'Roboto'
  },
  largeText: {
    fontSize: 44
  },
  smallText: {
    fontSize: 18
  }
});

