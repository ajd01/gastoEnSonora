import React, {Component} from 'react';
import dataSonora from '../../obrasSonora2018.json';
import {formatNumber} from '../../app/utils';

import {SafeAreaView, StyleSheet, ScrollView, View, Text} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

export default class SearchResults extends Component {
  render() {
    return (
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <View style={styles.body}>
            {dataSonora.map((row, i) => {
              if (i < 10) {
                return (
                  <View style={styles.sectionContainer}>
                    <Text style={styles.sectionTitle}> - {row.TIPO_OBRA}</Text>
                    <Text style={styles.sectionDescription}>
                      Total: ${formatNumber(row.TOTAL_CONTRATO)}
                    </Text>
                    <Text style={styles.sectionDescription}>
                      Modalidad: {row.MODALIDAD}
                    </Text>
                  </View>
                );
              }
            })}
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
});
