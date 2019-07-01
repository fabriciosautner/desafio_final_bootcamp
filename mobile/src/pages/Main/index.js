import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ActivityIndicator } from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ProductsActions from '~/store/ducks/products';
import CartActions from '~/store/ducks/cart';

import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';

import {
  Container,
  BackgroundTop,
  Header,
  IconBack,
  Title,
  Cart,
  Content,
  Product,
  Image,
  Infos,
  Name,
  Details,
  Time,
  InfoTime,
  Qtd,
  Scroll,
} from './styles';

class Main extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
    loadProductsRequest: PropTypes.func.isRequired,
    totalCart: PropTypes.number.isRequired,
    products: PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        details: PropTypes.string.isRequired,
      }),
    ]).isRequired,
    loading: PropTypes.bool.isRequired,
  };

  componentDidMount() {
    const { loadProductsRequest } = this.props;

    loadProductsRequest();
  }

  handleSelectProduct = (idProduct) => {
    const { navigation } = this.props;

    navigation.navigate('Type', { idProduct });
  };

  render() {
    const { navigation, loading, products, totalCart } = this.props;
    return (
      <Container>
        <BackgroundTop
          resizeMode="cover"
          source={{ uri: 'https://s3.amazonaws.com/bootcamp.fs/header-background@2x.png' }}
        >
          <Header>
            <IconBack onPress={() => navigation.navigate('History')}>
              <Icon name="history" size={26} color="#FFF" />
            </IconBack>
            <Title>Pizzaria Don Juan</Title>
            <Cart onPress={() => navigation.navigate('Cart')}>
              <Icon2 name="cart-outline" size={22} color="#FFF" />
              <Qtd>{totalCart > 0 ? totalCart : null}</Qtd>
            </Cart>
          </Header>
        </BackgroundTop>
        <Scroll>
          <Content>
            {loading ? (
              <ActivityIndicator size="small" color="#fff" />
            ) : (
              products.map(item => (
                <Product key={item.id} onPress={() => this.handleSelectProduct(item.id)}>
                  <Image source={{ uri: `https://s3.amazonaws.com/bootcamp.fs/${item.image}` }} />
                  <Infos>
                    <Name>{item.description}</Name>
                    <Details>{item.details}</Details>
                    <Time>
                      <Icon name="alarm" size={14} color="#666" />
                      <InfoTime>{`${item.preparation} mins`}</InfoTime>
                    </Time>
                  </Infos>
                </Product>
              ))
            )}
          </Content>
        </Scroll>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  products: state.products.data,
  loading: state.products.loading,
  totalCart: state.cart.data.reduce(total => total + 1, 0),
});

const mapDispatchToProps = dispatch => bindActionCreators({ ...ProductsActions, ...CartActions }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Main);
