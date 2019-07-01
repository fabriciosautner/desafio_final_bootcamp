import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Currency from 'react-currency-formatter';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CartActions from '~/store/ducks/cart';

import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';

import {
  Container,
  BackgroundTop,
  Header,
  IconBack,
  Title,
  Content,
  Product,
  Price,
  Image,
  Name,
  Scroll,
  Infos,
  Details,
  ButtonDelete,
  Footer,
  ButtonAdd,
  ButtonCheckout,
  TextCheckout,
  Left,
  Amount,
} from './styles';

class Cart extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
    removeItemCart: PropTypes.func.isRequired,
    total: PropTypes.number.isRequired,
    items: PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.shape({
        product: PropTypes.number.isRequired,
        imageType: PropTypes.string.isRequired,
        nameType: PropTypes.string.isRequired,
        size: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
      }),
    ]).isRequired,
    cartEmpty: PropTypes.bool.isRequired,
  };

  handleRemoveCart = (idProduct) => {
    const { removeItemCart } = this.props;
    removeItemCart(idProduct);
  };

  render() {
    const {
      navigation, total, items, cartEmpty,
    } = this.props;

    return (
      <Container>
        <BackgroundTop
          resizeMode="cover"
          source={{ uri: 'https://s3.amazonaws.com/bootcamp.fs/header-background@2x.png' }}
        >
          <Header>
            <Left>
              <IconBack onPress={() => navigation.navigate('Main')}>
                <Icon name="arrow-back" size={26} color="#FFF" />
              </IconBack>
              <Title>Carrinho</Title>
            </Left>
            <Amount>
              <Currency quantity={total} currency="BRL" />
            </Amount>
          </Header>
        </BackgroundTop>
        <Scroll>
          <Content>
            {cartEmpty ? (
              <Product>
                <Infos>
                  <Name>Carrinho Vazio</Name>
                  <Details>Clique no botão abaixo para selecionar itens</Details>
                </Infos>
              </Product>
            ) : (
              items.map(item => (
                <Product key={item.product}>
                  <Image
                    source={{ uri: `https://s3.amazonaws.com/bootcamp.fs/${item.imageType}` }}
                  />
                  <Infos>
                    <Name>{item.nameType}</Name>
                    <Details>{`Tamanho: ${item.size}`}</Details>
                    <Price>
                      <Currency quantity={item.price} currency="BRL" />
                    </Price>
                  </Infos>
                  <ButtonDelete onPress={() => this.handleRemoveCart(item.product)}>
                    <Icon name="delete-forever" size={26} color="#e5293e" />
                  </ButtonDelete>
                </Product>
              ))
            )}
          </Content>
          <Footer>
            <ButtonAdd onPress={() => navigation.navigate('Main')}>
              <Icon2 name="cart-plus" size={26} color="#666666" />
            </ButtonAdd>
            {!cartEmpty ? (
              <ButtonCheckout onPress={() => navigation.navigate('Order')}>
                <TextCheckout>Realizar Pedido</TextCheckout>
                <Icon name="arrow-forward" size={26} color="#fff" />
              </ButtonCheckout>
            ) : null}
          </Footer>
        </Scroll>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  items: state.cart.data,
  cartEmpty: state.cart.cartEmpty,
  total: state.cart.data.reduce((total, product) => total + product.price, 0),
});

const mapDispatchToProps = dispatch => bindActionCreators(CartActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Cart);
