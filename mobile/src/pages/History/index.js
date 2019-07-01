import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ActivityIndicator } from 'react-native';
import Currency from 'react-currency-formatter';
import { distanceInWords, parse } from 'date-fns';
import pt from 'date-fns/locale/pt';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AuthActions from '~/store/ducks/auth';
import OrdersActions from '~/store/ducks/orders';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  BackgroundTop,
  Header,
  IconBack,
  Left,
  Title,
  Content,
  Orders,
  Price,
  Name,
  Scroll,
  Details,
  IconExit,
} from './styles';

class History extends Component {
  static propTypes = {
    loadOrdersRequest: PropTypes.func.isRequired,
    authSignout: PropTypes.func.isRequired,
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
    orders: PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        created_at: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
      }),
    ]).isRequired,
    empty: PropTypes.bool.isRequired,
  };

  componentDidMount() {
    const { loadOrdersRequest } = this.props;

    loadOrdersRequest();
  }

  handleExit = () => {
    const { authSignout } = this.props;

    authSignout();
  };

  render() {
    const { navigation, orders, empty } = this.props;

    const date = new Date();
    const offSet = date.getTimezoneOffset() / 60;
    date.setHours(date.getHours() - offSet);

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
              <Title>Meus pedidos</Title>
            </Left>
            <IconExit onPress={this.handleExit}>
              <Icon name="exit-to-app" size={26} color="#FFF" />
            </IconExit>
          </Header>
        </BackgroundTop>
        <Scroll>
          <Content>
            {empty ? (
              <ActivityIndicator size="small" color="#fff" />
            ) : (
              orders.map(item => (
                <Orders key={item.id}>
                  <Name>{`Pedido #${item.id}`}</Name>
                  <Details>
                    {distanceInWords(date, parse(item.created_at), {
                      addSuffix: true,
                      locale: pt,
                    })}
                  </Details>
                  <Price>
                    <Currency quantity={Number(item.amount)} currency="BRL" />
                  </Price>
                </Orders>
              ))
            )}
          </Content>
        </Scroll>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  orders: state.orders.data,
  empty: state.orders.empty,
});

const mapDispatchToProps = dispatch => bindActionCreators({ ...AuthActions, ...OrdersActions }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(History);
