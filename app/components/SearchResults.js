import React, {Component} from 'react';
import dataSonora from '../../obrasSonora2018.json';
import {formatNumber} from '../../app/utils';
import _ from 'lodash';
import ShowSelection from './ShowSelection';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

export default class SearchResults extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedRow: false,
      selectedRowData: '',
    };
  }

  resetSelection() {
    this.setState({
      selectedRow: false,
    });
  }

  render() {
    if (!this.state.selectedRow) {
      const filterData = _.filter(
        dataSonora,
        _.omitBy(this.props.filterBy, _.isEmpty),
      );
      return (
        <SafeAreaView>
          <Text style={styles.homeButton}>
            Obras encontradas: {filterData.length}
          </Text>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}>
            <View style={styles.body}>
              {filterData.map(row => {
                return (
                  <TouchableOpacity
                    style={styles.saveButton}
                    onPress={() => {
                      this.setState({
                        selectedRow: true,
                        selectedRowData: row,
                      });
                    }}>
                    <View style={styles.sectionContainer}>
                      <Text style={styles.sectionTitle}>
                        {' '}
                        - {row.TIPO_OBRA}
                      </Text>
                      <Text style={styles.sectionDescription}>
                        Total: ${formatNumber(row.TOTAL_CONTRATO)}
                      </Text>
                      <Text style={styles.sectionDescription}>
                        Modalidad: {row.MODALIDAD}
                      </Text>
                    </View>
                  </TouchableOpacity>
                );
              })}
            </View>
          </ScrollView>
        </SafeAreaView>
      );
    } else {
      return (
        <SafeAreaView>
          <TouchableOpacity
            style={styles.homeButton}
            onPress={() => {
              this.resetSelection();
            }}>
            <Image source={require('../assets/back.png')} />
          </TouchableOpacity>
          <ShowSelection data={this.state.selectedRowData} />
        </SafeAreaView>
      );
    }
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
  homeButton: {
    borderWidth: 1,
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
    borderColor: '#2ECC71',
    backgroundColor: '#2ECC71',
    padding: 15,
    margin: 5,
    textAlign: 'center',
  },
  saveButtonText: {
    color: '#FFFFFF',
    fontSize: 20,
    textAlign: 'center',
  },
});
