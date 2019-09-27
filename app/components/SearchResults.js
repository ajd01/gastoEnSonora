import React, {Component} from 'react';
import dataSonora from '../../obrasSonora2018.json';
import {formatNumber} from '../../app/utils';
import _ from 'lodash';
import {SafeAreaView, StyleSheet, ScrollView, View, Text} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

export default class SearchResults extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const filterData = _.filter(
      dataSonora,
      _.omitBy(this.props.filterBy, _.isEmpty),
    );
    return (
      <SafeAreaView>
        <Text style={styles.text}>Obras encontradas: {filterData.length}</Text>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <View style={styles.body}>
            {filterData.map(row => {
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
  text: {
    fontSize: 20,
    padding: 8,
    textAlign: 'center',
  },
});
