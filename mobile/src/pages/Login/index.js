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
  InputEmail,
  InputPass,
  Button,
  SignUp,
  TextSignUp,
  TextButton,
  Background,
  TextError,
} from './styles';

class Login extends Component {
  state = { email: '', password: '' };

  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
    authSignin: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.bool.isRequired,
  };

  handleSignIn = () => {
    const { authSignin } = this.props;
    const { email, password } = this.state;

    authSignin(email, password);
    this.setState({ email: '', password: '' });
    this.emailInput.focus();
  };

  render() {
    const { navigation, loading, error } = this.props;
    const { email, password } = this.state;

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
              <InputEmail
                value={email}
                onChangeText={text => this.setState({ email: text })}
                autoCapitalize="none"
                autoCorrect={false}
                autoFocus
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
                onSubmitEditing={this.handleSignIn}
              />
              <Button onPress={this.handleSignIn}>
                {loading ? (
                  <ActivityIndicator size="small" color="#fff" />
                ) : (
                  <TextButton>Entrar</TextButton>
                )}
              </Button>
              {error ? <TextError>Não foi possível fazer o login</TextError> : null}
              <SignUp onPress={() => navigation.navigate('Signup')}>
                <TextSignUp>Criar conta gratuita</TextSignUp>
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
)(Login);
