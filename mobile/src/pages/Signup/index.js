import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ActivityIndicator } from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AuthActions from '~/store/ducks/auth';

import LinearGradient from 'react-native-linear-gradient';

import Fundo from '~/assets/background.png';

import {
  Container,
  Content,
  Logo,
  Input,
  InputPass,
  Button,
  SignUp,
  TextSignUp,
  TextButton,
  Background,
  TextError,
} from './styles';

class Signup extends Component {
  state = { email: '', password: '', name: '' };

  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
    authSignup: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.bool.isRequired,
  };

  handleSignUp = () => {
    const { authSignup } = this.props;
    const { email, password, name } = this.state;

    authSignup(email, password, name);
    this.setState({ email: '', password: '', name: '' });
    this.nameInput.focus();
  };

  render() {
    const { navigation, loading, error } = this.props;
    const { email, password, name } = this.state;

    return (
      <Container behavior="padding" enabled>
        <Background resizeMode="cover" source={Fundo}>
          <LinearGradient
            colors={['transparent', '#000']}
            style={{
              flex: 1,
              alignSelf: 'stretch',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Content>
              <Logo source={{ uri: 'https://s3.amazonaws.com/bootcamp.fs/logo@3x.png' }} />
              <Input
                value={name}
                onChangeText={text => this.setState({ name: text })}
                autoCapitalize="none"
                autoCorrect={false}
                placeholder="Nome completo"
                autoFocus
                returnKeyType="next"
                onSubmitEditing={() => this.emailInput.focus()}
                ref={(el) => {
                  this.nameInput = el;
                }}
              />
              <Input
                value={email}
                onChangeText={text => this.setState({ email: text })}
                autoCapitalize="none"
                autoCorrect={false}
                placeholder="Seu e-mail"
                returnKeyType="next"
                onSubmitEditing={() => this.passwordInput.focus()}
                ref={(el) => {
                  this.emailInput = el;
                }}
              />
              <InputPass
                value={password}
                onChangeText={text => this.setState({ password: text })}
                autoCapitalize="none"
                autoCorrect={false}
                secureTextEntry
                placeholder="Senha secreta"
                returnKeyType="send"
                ref={(el) => {
                  this.passwordInput = el;
                }}
                onSubmitEditing={this.handleSignUp}
              />
              <Button onPress={this.handleSignUp}>
                {loading ? (
                  <ActivityIndicator size="small" color="#fff" />
                ) : (
                  <TextButton>Criar conta</TextButton>
                )}
              </Button>
              {error ? <TextError>Não foi possível criar uma conta</TextError> : null}
              <SignUp onPress={() => navigation.navigate('Login')}>
                <TextSignUp>Já tenho login</TextSignUp>
              </SignUp>
            </Content>
          </LinearGradient>
        </Background>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  error: state.auth.error,
  loading: state.auth.loading,
});

const mapDispatchToProps = dispatch => bindActionCreators(AuthActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Signup);
