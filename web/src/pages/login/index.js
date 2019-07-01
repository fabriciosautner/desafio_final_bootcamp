import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AuthActions from 'store/ducks/auth';

import { Container, Content } from './styles';

class login extends Component {
  state = { email: '', password: '' };

  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
    authSignin: PropTypes.func.isRequired,
  };

  handleFormSubmit = (e) => {
    e.preventDefault();

    const { email, password } = this.state;
    const { authSignin } = this.props;

    if (!email || !password) {
      return;
    }
    authSignin(email, password);
  };

  render() {
    const { email, password } = this.state;
    const { error, loading } = this.props;

    return (
      <Container>
        <Content>
          <div>
            <form onSubmit={this.handleFormSubmit} className="form">
              <img src="https://s3.amazonaws.com/bootcamp.fs/logo@3x.png" alt="Logo" />
              <input
                value={email}
                onChange={e => this.setState({ email: e.target.value })}
                type="text"
                placeholder="Seu e-mail"
              />
              <input
                value={password}
                onChange={e => this.setState({ password: e.target.value })}
                secureTextEntry
                placeholder="Senha secreta"
                type="password"
                className="pass"
              />
              <button type="submit">{loading ? '...' : 'Entrar'}</button>
              {error ? <p>Não foi possível fazer o login</p> : null}
            </form>
          </div>
        </Content>
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
)(login);
