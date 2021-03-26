/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import {
  View,
  SafeAreaView,
  Image,
  Text,
  Button,
  TouchableOpacity,
  TouchableHighlight,
  TouchableWithoutFeedback,
  StyleSheet,
  ScrollView,
  Platform,
} from 'react-native';
import _ from 'lodash';
import { charmander } from './pokemon'

const styles = StyleSheet.create({
  square: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: 'green',
    margin: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    elevation: 11,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: 'blue'
  },
  greenBackground: {
    backgroundColor: 'green',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  leftData: {
    flex: 1,
    textAlign: 'right',
  },
  rightData: {
    flex: 1,
    paddingLeft: 20,
    fontWeight: 'bold',
  },
});

const Square = () => <View style={styles.square} />;

class AppComponent extends Component {
  render() {

    const type = Platform.select({
      ios: () => {
        return 'orange';
      },
      android: () => {
        return 'red';
      },
    });

    return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <TouchableOpacity style={{ height: 500, backgroundColor: 'gray' }}>
            <View
              style={{
                margin: 10,
                backgroundColor: type(),
                height: 300,
                top: 100,
                borderRadius: 50,
                borderColor: '#e67e22',
                borderBottomWidth: 2,
                borderLeftWidth: 2,
                borderRightWidth: 2,
              }}
            >
              <View style={{ paddingTop: 90 }}>
                <Text
                  style={{
                    textAlign: 'center',
                    fontSize: 20,
                    fontWeight: 'bold',
                    color: '#e67e22',
                    paddingBottom: 20,
                  }}
                >
                  {_.capitalize(charmander.name)}
                </Text>
              </View>

              <View style={styles.row}>
                <Text style={styles.leftData}>tipo</Text>
                <Text style={styles.rightData}>{charmander.type} 🔥</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.leftData}>Velocidad</Text>
                <Text style={styles.rightData}>{charmander.speed}</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.leftData}>Ataque</Text>
                <Text style={styles.rightData}>{charmander.attack}</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.leftData}>Ataque Especial</Text>
                <Text style={styles.rightData}>{charmander.attackSpecial}</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.leftData}>Defensa</Text>
                <Text style={styles.rightData}>{charmander.defense}</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.leftData}>Defensa Especial</Text>
                <Text style={styles.rightData}>{charmander.defenseSpecial}</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.leftData}>HP Base</Text>
                <Text style={[styles.rightData, { color: 'green' }]}>{charmander.baseHP}</Text>
              </View>

            </View>
            <Image
              source={{ uri: charmander.image }}
              style={{
                position: 'absolute',
                width: 200,
                height: 200,
                alignSelf: 'center'
              }}
            />
          </TouchableOpacity>

          <View style={[styles.wrapper, styles.greenBackground]}>
            <Square />
            <Square />
            <Square />
            <Square />
            <Square />
            <Square />
            <Square />
            <Image
              source={{ uri: 'https://picsum.photos/75' }}
              style={{
                width: 100,
                height: 100,
                borderRadius: 50,
                margin: 5,
              }}
              resizeMode={'contain'}
            />
            <View
              style={{
                backgroundColor: 'orange',
                padding: 10,
                justifyContent: 'center',
                borderRadius: 10,
              }}
            >
              <Text
                style={{
                  fontSize: 30,
                  fontWeight: 'bold',
                  color: 'white',
                  fontFamily: 'Avenir',
                }}
              >
                Hola <Text style={{ color: 'red' }}>React Native</Text>
              </Text>
            </View>

            <Button title="Info" color="blue" />
            <Button title="Warning" color="red" />
            <TouchableOpacity
              // onPress={() => alert('touchable')}
              style={{
                backgroundColor: 'red',
                justifyContent: 'center',
                padding: 20,
                borderRadius: 5,
                marginTop: 5,
              }}
            >
              <Text>TouchableOpacity</Text>
            </TouchableOpacity>
            <TouchableHighlight
              onPress={() => { }}
              style={{
                backgroundColor: 'red',
                justifyContent: 'center',
                padding: 20,
                borderRadius: 5,
                marginTop: 5,
              }}
              underlayColor={'green'}
            >
              <Text>TouchableHighlight</Text>
            </TouchableHighlight>

            {/** Botón TouchableWithoutFeedback */}

            <TouchableWithoutFeedback
              onPress={() => alert('without feedback')}
            >
              <View
                style={{
                  backgroundColor: 'blue',
                  justifyContent: 'center',
                  padding: 20,
                  borderRadius: 5,
                  marginTop: 5,
                }}
              >
                <Text style={{ color: 'white' }}>TouchableWithoutFeedback</Text>
              </View>
            </TouchableWithoutFeedback>

          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default AppComponent;
