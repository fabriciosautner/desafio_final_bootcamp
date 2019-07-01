import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  flex: 1;
  background: #d9d9d9;
`;

export const BackgroundTop = styled.ImageBackground``;
export const Header = styled.View`
  height: ${getStatusBarHeight() + 120}px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
`;
export const IconBack = styled.TouchableOpacity.attrs({
  hitSlop: {
    top: 5,
    left: 5,
    rigth: 5,
    bottom: 5,
  },
})``;
export const Title = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 18px;
  padding-left: 15px;
`;
export const Amount = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 18px;
`;
export const Cart = styled.TouchableOpacity.attrs({
  hitSlop: {
    top: 5,
    left: 5,
    rigth: 5,
    bottom: 5,
  },
})`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background: #e5293e;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;
export const Scroll = styled.ScrollView`
  margin: -40px 30px 0 30px;
`;

export const Content = styled.View`
  flex: 1;
`;
export const Product = styled.View`
  background: #fff;
  border-radius: 15px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  margin-bottom: 10px;
`;
export const Image = styled.Image`
  width: 78px;
  height: 78px;
`;
export const Infos = styled.View`
  flex: 1;
  align-self: stretch;
  padding: 5px 10px;
  justify-content: space-around;
`;
export const Name = styled.Text`
  font-size: 16px;
  color: #0b2031;
`;
export const Details = styled.Text`
  font-size: 12px;
  color: #666;
`;
export const Price = styled.Text`
  font-size: 16px;
  color: #0b2031;
  font-weight: bold;
`;
export const ButtonDelete = styled.TouchableOpacity.attrs({
  hitSlop: {
    top: 5,
    left: 5,
    rigth: 5,
    bottom: 5,
  },
})``;
export const Footer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
`;
export const Left = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
export const ButtonAdd = styled.TouchableOpacity.attrs({
  hitSlop: {
    top: 5,
    left: 5,
    rigth: 5,
    bottom: 5,
  },
})`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ButtonCheckout = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  background: #e5293e;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 10px 20px;
  border-radius: 25px;
`;
export const TextCheckout = styled.Text`
  text-transform: uppercase;
  color: #fff;
  font-weight: bold;
  margin-right: 10px;
  font-size: 16px;
`;
