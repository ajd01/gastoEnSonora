import SearchResults from './SearchResults';
import React, {Component} from 'react';
import {
  StyleSheet,
  TextInput,
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
      submited: true,
    };
  }

  render() {
    if (!this.props.submited) {
      return (
        <SafeAreaView>
          <View>
            <TextInput
              style={styles.textInput}
              placeholder="Your name"
              maxLength={20}
            />
            <TouchableOpacity style={styles.saveButton}>
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
