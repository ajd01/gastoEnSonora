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
      MUNICIPIO: '',
      MUNICIPIOSList: this.makeItems('MUNICIPIO'),
      TIPO_CONTRATO: '',
      TIPO_CONTRATOSList: this.makeItems('TIPO_CONTRATO'),
      TIPO_OBRA: '',
      TIPO_OBRASList: this.makeItems('TIPO_OBRA'),
      ORGANISMO: '',
      ORGANISMOSList: this.makeItems('ORGANISMO'),
      CONTRATISTA: '',
      CONTRATISTASList: this.makeItems('CONTRATISTA'),
      RESIDENTE: '',
      RESIDENTESList: this.makeItems('RESIDENTE'),
      submited: false,
    };
  }

  resetSelection() {
    this.setState({
      MUNICIPIO: '',
      TIPO_CONTRATO: '',
      TIPO_OBRA: '',
      ORGANISMO: '',
      CONTRATISTA: '',
      RESIDENTE: '',
      submited: false,
    });
  }

  makeItems(key) {
    return _.uniqBy(dataSonora, key).map(d => {
      return {label: d[key], value: d[key]};
    });
  }

  render() {
    if (!this.state.submited) {
      return (
        <SafeAreaView>
          <Text style={styles.text}>
            Selecciona los datos deseados para filtrar:
          </Text>
          <RNPickerSelect
            onValueChange={MUNICIPIO => this.setState({MUNICIPIO})}
            placeholder={{label: 'Selecciona un municipio...'}}
            style={pickerStyle}
            items={this.state.MUNICIPIOSList}
          />
          <RNPickerSelect
            onValueChange={TIPO_CONTRATO => this.setState({TIPO_CONTRATO})}
            placeholder={{label: 'Selecciona un tipo de contrado...'}}
            style={pickerStyle}
            items={this.state.TIPO_CONTRATOSList}
          />
          <RNPickerSelect
            onValueChange={TIPO_OBRA => this.setState({TIPO_OBRA})}
            placeholder={{label: 'Selecciona un tipo de obras...'}}
            style={pickerStyle}
            items={this.state.TIPO_OBRASList}
          />
          <RNPickerSelect
            onValueChange={ORGANISMO => this.setState({ORGANISMO})}
            placeholder={{label: 'Selecciona un organismo...'}}
            style={pickerStyle}
            items={this.state.ORGANISMOSList}
          />
          <RNPickerSelect
            onValueChange={CONTRATISTA => this.setState({CONTRATISTA})}
            placeholder={{label: 'Selecciona un contratista...'}}
            style={pickerStyle}
            items={this.state.CONTRATISTASList}
          />
          <RNPickerSelect
            onValueChange={RESIDENTE => this.setState({RESIDENTE})}
            placeholder={{label: 'Selecciona un residente...'}}
            style={pickerStyle}
            items={this.state.RESIDENTESList}
          />
          <View>
            <TouchableOpacity
              style={styles.saveButton}
              onPress={() => {
                this.setState({submited: true});
              }}>
              <Text style={styles.saveButtonText}>Buscar Obras</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      );
    } else {
      return (
        <SafeAreaView>
          <TouchableOpacity
            style={styles.saveButton}
            onPress={() => {
              this.resetSelection();
            }}>
            <Text style={styles.saveButtonText}>Regresar</Text>
          </TouchableOpacity>
          <SearchResults
            filterBy={{
              MUNICIPIO: this.state.MUNICIPIO,
              TIPO_CONTRATO: this.state.TIPO_CONTRATO,
              TIPO_OBRA: this.state.TIPO_OBRA,
              ORGANISMO: this.state.ORGANISMO,
              CONTRATISTA: this.state.CONTRATISTA,
              RESIDENTE: this.state.RESIDENTE,
            }}
          />
        </SafeAreaView>
      );
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
