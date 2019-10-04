import React, {Component} from 'react';
import {formatNumber} from '../../app/utils';
import {SafeAreaView, StyleSheet, View, Text, ScrollView} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

export default class ShowSelection extends Component {
  constructor(props) {
    super(props);
  }

  renderTextStyled(title, value) {
    return (
      <View>
        <Text style={styles.sectionDescriptionDark}>{title}</Text>
        <Text style={styles.sectionDescription}>{value}</Text>
      </View>
    );
  }

  render() {
    const o = this.props.data;
    return (
      <SafeAreaView>
        <Text style={styles.sectionDescriptionDark}>
          Obra: {o.NUM_CONTRATO}
        </Text>
        <ScrollView
          behaviour="height"
          keyboardVerticalOffset={64}
          style={styles.scrollView}>
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>{o.TIPO_OBRA}</Text>
            {this.renderTextStyled(
              'Total',
              '$' + formatNumber(o.TOTAL_CONTRATO),
            )}
            {this.renderTextStyled('Modalidad', o.MODALIDAD)}
            {this.renderTextStyled('Objeto', o.OBJETO)}
            {this.renderTextStyled('Municipio', o.MUNICIPIO)}
            {this.renderTextStyled('Loclidad', o.LOCALIDAD)}
            {this.renderTextStyled('Numero de beneficiados', o.BENEFICIADOS)}
            {this.renderTextStyled('UA Solicitante', o.UA_SOLICITANTE)}
            {this.renderTextStyled('UA Responsable', o.UA_RESPONSABLE)}
            {this.renderTextStyled('CONTRATISTA', o.CONTRATISTA)}
            {this.renderTextStyled('RESIDENTE', o.RESIDENTE)}
            {this.renderTextStyled('FECHA_CONTRATO', o.FECHA_CONTRATO)}
            {this.renderTextStyled('FECHA_TERMINO', o.FECHA_TERMINO)}
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
    marginTop: '1%',
    marginBottom: '35%',
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
    textAlign: 'center',
    color: Colors.black,
  },
  sectionDescriptionDark: {
    marginTop: 3,
    fontSize: 18,
    fontWeight: '600',
    color: Colors.dark,
    backgroundColor: '#aaa',
  },
  sectionDescription: {
    fontSize: 18,
    padding: 3,
    fontWeight: '400',
    color: Colors.dark,
    backgroundColor: '#ccc',
  },
  text: {
    fontSize: 20,
    padding: 8,
    textAlign: 'center',
  },
});
