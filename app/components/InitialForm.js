import SearchResults from './SearchResults';
import React, {Component} from 'react';
import RNPickerSelect from 'react-native-picker-select';
import dataSonora from '../../obrasSonora2018.json';
import _ from 'lodash';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';

export default class InitialForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      MODALIDAD: '',
      TIPO_CONTRATO: '',
      TIPO_OBRA: '',
      MUNICIPIO: '',
      LOCALIDAD: '',
      ORGANISMO: '',
      CONTRATISTA: '',
      RESIDENTE: '',
      FECHA_CONTRATO: '',
      FECHA_ENTREGA: '',
      submited: false,
      MUNICIPIOSList: _.uniqBy(dataSonora, 'MUNICIPIO').map(d => {
        return {label: d.MUNICIPIO, value: d.MUNICIPIO};
      }),
    };
  }

  render() {
    if (!this.state.submited) {
      return (
        <SafeAreaView>
          <Text style={styles.text}>
            Selecciona los datos deseados para filtrar:
          </Text>
          <View>
            <RNPickerSelect
              onValueChange={MUNICIPIO => this.setState({MUNICIPIO})}
              placeholder={{label: 'Selecciona un municipio...'}}
              style={pickerStyle}
              items={this.state.MUNICIPIOSList}
            />
            <TouchableOpacity
              style={styles.saveButton}
              onPress={() => {
                // eslint-disable-next-line no-alert
                alert(this.state.MUNICIPIO);
              }}>
              <Text style={styles.saveButtonText}>Save</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      );
    } else {
      return <SearchResults />;
    }
  }
}

const styles = StyleSheet.create({
  inputContainer: {
    paddingTop: 15,
  },
  textInput: {
    borderColor: '#CCCCCC',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    height: 50,
    fontSize: 25,
    paddingLeft: 20,
    paddingRight: 20,
  },
  text: {
    fontSize: 25,
    paddingLeft: 20,
    paddingRight: 20,
    textAlign: 'center',
  },
  saveButton: {
    borderWidth: 1,
    borderColor: '#007BFF',
    backgroundColor: '#007BFF',
    padding: 15,
    margin: 5,
  },
  saveButtonText: {
    color: '#FFFFFF',
    fontSize: 20,
    textAlign: 'center',
  },
});

const pickerStyle = {
  inputIOS: {
    color: '#000',
    paddingTop: 13,
    fontSize: 25,
    paddingHorizontal: 10,
    paddingBottom: 12,
  },
  inputAndroid: {
    color: '#000',
    fontSize: 25,
  },
  placeholderColor: '#CCCCCC',
  underline: {borderTopWidth: 0},
  icon: {
    position: 'absolute',
    backgroundColor: 'transparent',
    borderTopWidth: 5,
    borderTopColor: '#00000099',
    borderRightWidth: 5,
    borderRightColor: 'transparent',
    borderLeftWidth: 5,
    borderLeftColor: 'transparent',
    width: 0,
    height: 0,
    top: 20,
    right: 15,
  },
};
