import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AuthActions from 'store/ducks/auth';

import { FaShoppingBag } from 'react-icons/fa';
import { Container } from './styles';

class header extends Component {
  static propTypes = {
    authLogoffRequest: PropTypes.func.isRequired,
    username: PropTypes.string.isRequired,
  };

  handleLogoff = (e) => {
    e.preventDefault();

    const { authLogoffRequest } = this.props;

    authLogoffRequest();
  };

  render() {
    const { username } = this.props;
    return (
      <Container>
        <div>
          <img src="https://s3.amazonaws.com/bootcamp.fs/logo@3x.png" alt="logo" />
          <p className="title">Pizzaria Don Juan</p>
        </div>
        <div>
          <ul>
            <li>
              <p>{username}</p>
              <a href="/" onClick={this.handleLogoff}>
                Sair do app
              </a>
            </li>
            <li>
              <div>
                <FaShoppingBag size="1em" />
              </div>
            </li>
          </ul>
        </div>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  username: state.auth.name,
});

const mapDispatchToProps = dispatch => bindActionCreators(AuthActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(header);
