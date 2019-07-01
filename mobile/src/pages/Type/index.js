import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ActivityIndicator } from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import TypesActions from '~/store/ducks/types';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  BackgroundTop,
  Header,
  IconBack,
  Title,
  Content,
  TypeProduct,
  Image,
  Name,
  Scroll,
} from './styles';

class Type extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
    loadTypesRequest: PropTypes.func.isRequired,
    types: PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        description: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
      }),
    ]).isRequired,
    loading: PropTypes.bool.isRequired,
  };

  componentDidMount() {
    const { navigation, loadTypesRequest } = this.props;
    const idProduct = navigation.getParam('idProduct');

    loadTypesRequest(idProduct);
  }

  render() {
    const { navigation, types, loading } = this.props;
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
            <Title>Selecione o tipo</Title>
          </Header>
        </BackgroundTop>
        <Scroll>
          <Content>
            {loading ? (
              <ActivityIndicator size="small" color="#fff" />
            ) : (
              types.map(item => (
                <TypeProduct
                  key={item.id}
                  onPress={() => navigation.navigate('Size', {
                    idType: item.id,
                    nameType: item.description,
                    imageType: item.image,
                  })
                  }
                >
                  <Image source={{ uri: `https://s3.amazonaws.com/bootcamp.fs/${item.image}` }} />
                  <Name>{item.description}</Name>
                </TypeProduct>
              ))
            )}
          </Content>
        </Scroll>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  types: state.types.data,
  loading: state.types.loading,
});

const mapDispatchToProps = dispatch => bindActionCreators(TypesActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Type);
