import React, { Component } from 'react';
import { Image } from 'react-native';
import PropTypes from 'prop-types';
import Currency from 'react-currency-formatter';

import {
  SizeProduct, ImageSize, Name, Price, BoxImage, Details,
} from './styles';

export default class Item extends Component {
  state = { width: 130, height: 120 };

  static propTypes = {
    handleSelectSize: PropTypes.func.isRequired,
    item: PropTypes.shape({
      id: PropTypes.number.isRequired,
      description: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    }).isRequired,
  };

  componentDidMount() {
    const { item } = this.props;
    Image.getSize(`https://s3.amazonaws.com/bootcamp.fs/${item.image}`, (width, height) => {
      this.setState({ width, height });
    });
  }

  render() {
    const { item, handleSelectSize } = this.props;
    const { width, height } = this.state;
    return (
      <SizeProduct
        onPress={() => handleSelectSize(item.pivot.id, item.description, Number(item.pivot.price))}
      >
        <BoxImage>
          <ImageSize
            style={{ width, height }}
            source={{ uri: `https://s3.amazonaws.com/bootcamp.fs/${item.image}` }}
          />
        </BoxImage>
        <Details>
          <Name>{item.description}</Name>
          <Price>
            <Currency quantity={Number(item.pivot.price)} currency="BRL" />
          </Price>
        </Details>
      </SizeProduct>
    );
  }
}
