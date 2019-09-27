import {StyleSheet, Platform} from 'react-native';

const stylesSlides = StyleSheet.create({
  MainContainer: {
    flex: 1,
    paddingTop: Platform.OS === 'ios' ? 20 : 0,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 26,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
  },
  text: {
    color: '#fff',
    fontSize: 20,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
});

const slidesConfig = [
  {
    key: 'k1',
    title: 'Gastos Sonora',
    text: 'Una app para saber a donde se va nuestro dinero.',
    image: require('./assets/money.png'),
    titleStyle: stylesSlides.title,
    textStyle: stylesSlides.text,
    imageStyle: stylesSlides.image,
    backgroundColor: '#FF1744',
  },
  {
    key: 'k2',
    title: '¿Por que?',
    text:
      'Creo que todos queremos saber a donde se va nuestro dinero y cree la app para poder verlo de una manera sencilla.',
    image: require('./assets/user.png'),
    titleStyle: stylesSlides.title,
    textStyle: stylesSlides.text,
    imageStyle: stylesSlides.image,
    backgroundColor: '#D500F9',
  },
  {
    key: 'k3',
    title: '¿Que puedo hacer?',
    text: 'Tome datos de transparencia y los plasme en un buscador sencillo',
    image: require('./assets/mobile.png'),
    titleStyle: stylesSlides.title,
    textStyle: stylesSlides.text,
    imageStyle: stylesSlides.image,
    backgroundColor: '#2979FF',
  },
];

function formatNumber(num) {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
}

module.exports = {
  formatNumber,
  stylesSlides,
  slidesConfig,
};
