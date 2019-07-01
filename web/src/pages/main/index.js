import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import Currency from 'react-currency-formatter';
import { distanceInWords, parse } from 'date-fns';
import pt from 'date-fns/locale/pt';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import OrdersActions from 'store/ducks/orders';

import Header from 'components/header';

import { Container, Content, Body } from './styles';

class main extends Component {
  state = {};

  componentDidMount() {
    const { loadOrdersRequest } = this.props;

    loadOrdersRequest();
  }

  render() {
    const { orders } = this.props;

    return (
      <Container>
        <Content>
          <Header />
          <Body>
            <h3>Últimos pedidos</h3>
            {orders.map(item => (
              <div className="order">
                <div>
                  <p>{`Pedido #${item.id} - ${item.user.name}`}</p>
                  <small>
                    {distanceInWords(new Date(), parse(item.created_at), {
                      addSuffix: true,
                      locale: pt,
                    })}
                  </small>
                  <strong>
                    <Currency quantity={Number(item.amount)} currency="BRL" />
                  </strong>
                </div>
                <ul>
                  {item.orderItems.map(product => (
                    <li key={product.id}>
                      <img
                        src={`https://s3.amazonaws.com/bootcamp.fs/${
                          product.sizesTypes.types.image
                        }`}
                        alt={product.sizesTypes.types.description}
                      />
                      <div>
                        <p>{product.sizesTypes.types.description}</p>
                        <small>{`Tamanho: ${product.sizesTypes.sizes.description}`}</small>
                      </div>
                    </li>
                  ))}
                </ul>
                <p>
                  <strong>Observações: </strong>
                  {item.note}
                </p>
              </div>
            ))}
          </Body>
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  orders: state.orders.data,
});

const mapDispatchToProps = dispatch => bindActionCreators(OrdersActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(main);
