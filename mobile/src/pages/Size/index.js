import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ActivityIndicator, Alert } from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SizesActions from '~/store/ducks/sizes';
import CartActions from '~/store/ducks/cart';

import Icon from 'react-native-vector-icons/MaterialIcons';

import SizeProduct from './Item';

import {
  Container, BackgroundTop, Header, IconBack, Title, Content, Scroll,
} from './styles';

class Size extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
    loadSizesRequest: PropTypes.func.isRequired,
    addItemTempRequest: PropTypes.func.isRequired,
    addItemCart: PropTypes.func.isRequired,
    itemAdd: PropTypes.shape().isRequired,
    sizes: PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        pivot: PropTypes.shape({
          id: PropTypes.number.isRequired,
          price: PropTypes.string.isRequired,
        }).isRequired,
      }),
    ]).isRequired,
    cart: PropTypes.oneOfType([PropTypes.array, PropTypes.shape()]).isRequired,
    loading: PropTypes.bool.isRequired,
  };

  componentDidMount() {
    const { navigation, loadSizesRequest, addItemTempRequest } = this.props;
    const idType = navigation.getParam('idType');
    const nameType = navigation.getParam('nameType');
    const imageType = navigation.getParam('imageType');

    const itemAdd = { nameType, imageType };
    addItemTempRequest(itemAdd);

    loadSizesRequest(idType);
  }

  handleSelectSize = (idSize, nameSize, priceSize) => {
    const {
      itemAdd, addItemCart, navigation, cart,
    } = this.props;

    const found = cart.find(item => item.product === idSize);

    if (!found) {
      const item = {
        ...itemAdd,
        product: idSize,
        size: nameSize,
        price: priceSize,
      };
      addItemCart(item);
      navigation.navigate('Cart');
    } else {
      Alert.alert(
        'Atenção',
        'Você já tem um item igual a esse no seu carrinho.',
        [{ text: 'OK', onPress: () => navigation.navigate('Cart') }],
        { cancelable: false },
      );
    }
  };

  render() {
    const { navigation, sizes, loading } = this.props;

    return (
      <Container>
        <BackgroundTop
          resizeMode="cover"
          source={{ uri: 'https://s3.amazonaws.com/bootcamp.fs/header-background@2x.png' }}
        >
          <Header>
            <IconBack onPress={() => navigation.goBack()}>
              <Icon name="arrow-back" size={26} color="#FFF" />
            </IconBack>
            <Title>Selecione um tamanho</Title>
          </Header>
        </BackgroundTop>
        <Scroll>
          <Content>
            {loading ? (
              <ActivityIndicator size="small" color="#fff" />
            ) : (
              sizes.map(item => (
                <SizeProduct key={item.id} item={item} handleSelectSize={this.handleSelectSize} />
              ))
            )}
          </Content>
        </Scroll>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  sizes: state.sizes.data,
  loading: state.sizes.loading,
  itemAdd: state.cart.itemAdd,
  cart: state.cart.data,
});

const mapDispatchToProps = dispatch => bindActionCreators({ ...SizesActions, ...CartActions }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Size);
