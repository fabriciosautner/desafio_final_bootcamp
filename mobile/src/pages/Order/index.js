import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Currency from 'react-currency-formatter';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CartActions from '~/store/ducks/cart';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  BackgroundTop,
  Header,
  Left,
  IconBack,
  Title,
  Scroll,
  Content,
  Note,
  Cep,
  Line,
  Street,
  Number,
  District,
  Footer,
  ButtonCheckout,
  TextCheckout,
  Amount,
} from './styles';

class Order extends Component {
  state = {
    note: '',
    cep: '',
    street: '',
    number: '',
    district: '',
  };

  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
    sendOrderRequest: PropTypes.func.isRequired,
    total: PropTypes.number.isRequired,
    items: PropTypes.oneOfType([PropTypes.array, PropTypes.shape()]).isRequired,
  };

  handleSendOrder = () => {
    const { sendOrderRequest, items, total } = this.props;
    const order = { ...this.state };

    sendOrderRequest(order, items, total);
  };

  handleFindCep = async (cep) => {
    if (cep.length <= 8) {
      this.setState({ cep });
    }
    if (cep.length === 8) {
      const api = axios.create({
        baseURL: 'https://viacep.com.br/ws',
      });
      const { data } = await api.get(`/${cep}/json`);

      this.setState({ street: data.logradouro, district: data.bairro });
      this.numberInput.focus();
    }
  };

  render() {
    const { navigation, total } = this.props;
    const {
      note, cep, street, number, district,
    } = this.state;
    return (
      <Container>
        <BackgroundTop
          resizeMode="cover"
          source={{ uri: 'https://s3.amazonaws.com/bootcamp.fs/header-background@2x.png' }}
        >
          <Header>
            <Left>
              <IconBack onPress={() => navigation.goBack()}>
                <Icon name="arrow-back" size={26} color="#FFF" />
              </IconBack>
              <Title>Realizar pedido</Title>
            </Left>
            <Amount>
              <Currency quantity={total} currency="BRL" />
            </Amount>
          </Header>
        </BackgroundTop>
        <Scroll>
          <Content>
            <Note
              value={note}
              onChangeText={text => this.setState({ note: text })}
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="Alguma observação?"
              textAlignVertical="top"
              multiline
              returnKeyType="next"
              onSubmitEditing={() => this.cepInput.focus()}
              ref={(el) => {
                this.cepInput = el;
              }}
            />
            <Cep
              value={cep}
              onChangeText={text => this.handleFindCep(text)}
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="Qual seu CEP?"
              returnKeyType="next"
              onSubmitEditing={() => this.streetInput.focus()}
              ref={(el) => {
                this.cepInput = el;
              }}
              keyboardType="numeric"
            />
            <Line>
              <Street
                value={street}
                onChangeText={text => this.setState({ street: text })}
                autoCapitalize="none"
                autoCorrect={false}
                placeholder="Rua"
                returnKeyType="next"
                onSubmitEditing={() => this.numberInput.focus()}
                ref={(el) => {
                  this.streetInput = el;
                }}
              />
              <Number
                value={number}
                onChangeText={text => this.setState({ number: text })}
                autoCapitalize="none"
                autoCorrect={false}
                placeholder="Nº"
                returnKeyType="next"
                onSubmitEditing={() => this.districtInput.focus()}
                ref={(el) => {
                  this.numberInput = el;
                }}
                keyboardType="numeric"
              />
            </Line>
            <District
              value={district}
              onChangeText={text => this.setState({ district: text })}
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="Bairro"
              returnKeyType="send"
              onSubmitEditing={() => this.handleSendOrder()}
              ref={(el) => {
                this.districtInput = el;
              }}
            />
          </Content>
          <Footer>
            <ButtonCheckout onPress={() => this.handleSendOrder()}>
              <TextCheckout>Finalizar</TextCheckout>
              <Icon name="arrow-forward" size={26} color="#fff" />
            </ButtonCheckout>
          </Footer>
        </Scroll>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  items: state.cart.data,
  total: state.cart.data.reduce((total, product) => total + product.price, 0),
});

const mapDispatchToProps = dispatch => bindActionCreators(CartActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Order);
